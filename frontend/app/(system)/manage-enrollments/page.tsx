"use client";

import { useEffect, useMemo, useState } from "react";
import axiosInstance from "../../utils/ApiClient";
import type { student,course } from "../../utils/types";


export default function StudentsEnrollmentPage() {
  const [students, setStudents] = useState<student[]>([]);
  const [courses, setCourses] = useState<course[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selected, setSelected] = useState<student | null>(null);
  const [pickCourseId, setPickCourseId] = useState("");

  const [loading, setLoading] = useState({
    students: false,
    courses: false,
    details: false,
    action: false,
  });
  const [msg, setMsg] = useState("");

  // ── fetch lists ─────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        setLoading((s) => ({ ...s, students: true }));
        const r = await axiosInstance.get("/students");
        setStudents(r.data);
        console.log('students',r.data);
      } catch {
        setMsg("Failed to load students.");
      } finally {
        setLoading((s) => ({ ...s, students: false }));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading((s) => ({ ...s, courses: true }));
        const r = await axiosInstance.get("/courses");
        setCourses(r.data);
        console.log('courses',r.data);
      } catch {
        setMsg("Failed to load courses.");
      } finally {
        setLoading((s) => ({ ...s, courses: false }));
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedId) {
      setSelected(null);
      return;
    }
    (async () => {
      try {
        setLoading((s) => ({ ...s, details: true }));
        const r = await axiosInstance.get(`/students/${selectedId}`);
        setSelected(r.data);
        console.log('selected student',r.data);
      } catch {
        setMsg("Failed to load student details.");
      } finally {
        setLoading((s) => ({ ...s, details: false }));
      }
    })();
  }, [selectedId]);

  const enrolledSet = useMemo(
    () => new Set((selected?.courses ?? []).map((c: any) => c._id ?? c)),
    [selected]
  );

  // ── actions ────────────────────────────────────────────────
  const enroll = async () => {
    if (!selected || !pickCourseId) return;
    try {
      setLoading((s) => ({ ...s, action: true }));
      setMsg("");
      await axiosInstance.put(`/students/${selected._id}/courses/enroll/${pickCourseId}`);
      const r = await axiosInstance.get(`/students/${selected._id}`);
      setSelected(r.data);
      setPickCourseId("");
      setMsg("Enrolled successfully.");
    } catch (e: any) {
      setMsg(e?.response?.data?.message ?? "Failed to enroll.");
    } finally {
      setLoading((s) => ({ ...s, action: false }));
    }
  };

  const unenroll = async (courseId: string) => {
    if (!selected) return;
    try {
      setLoading((s) => ({ ...s, action: true }));
      setMsg("");
      await axiosInstance.put(`/students/${selected._id}/courses/unenroll/${courseId}`);
      const r = await axiosInstance.get(`/students/${selected._id}`);
      setSelected(r.data);
      setMsg("Unenrolled successfully.");
    } catch (e: any) {
      setMsg(e?.response?.data?.message ?? "Failed to unenroll.");
    } finally {
      setLoading((s) => ({ ...s, action: false }));
    }
  };

  return (
    <section className="col-span-12 lg:col-span-6 h-full overflow-y-auto">
      <div className=" border border-neutral-800 bg-[#151515] text-neutral-100 shadow-xl  h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10  bg-gradient-to-r from-neutral-900 to-neutral-800 px-5 py-4">
          <h1 className="text-lg font-semibold tracking-wide">Enrollment</h1>
          <p className="mt-1 text-xs text-neutral-300">
            Select a student, manage their courses, or enroll in a new one.
          </p>
        </div>

        {/* 2-column content */}
        <div className="grid gap-4 p-5 md:grid-cols-2">
          {/* ── Left: students selector + list ── */}
          <div className="rounded-xl border border-neutral-800 bg-[#1f1f1f]">
            <div className="border-b border-neutral-800 px-4 py-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium">Students</h2>
                {loading.students && (
                  <span className="text-xs text-neutral-400">Loading…</span>
                )}
              </div>

              {/* NEW: Dropdown selector */}
              <div className="mt-3 flex gap-2">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="flex-1 rounded-md border border-neutral-800 bg-[#2a2a2a] p-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  disabled={loading.students}
                >
                  <option value="">Select a student…</option>
                  {students.map((s) => (
                    <option key={s._id.toString()} value={s._id.toString()}>
                      {s.name} — {s.email}
                    </option>
                  ))}
                </select>
                {selectedId && (
                  <button
                    onClick={() => setSelectedId("")}
                    className="rounded-md border border-neutral-800 bg-[#2a2a2a] px-3 py-2 text-sm hover:bg-[#303030]"
                    title="Clear selection"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable list (optional alternative to dropdown) */}
            <div className="max-h-[56vh] overflow-auto p-3 space-y-2">
              {students.length === 0 && !loading.students ? (
                <p className="text-sm text-neutral-400 px-1">No students found.</p>
              ) : (
                students.map((s) => {
                  const active = selectedId === s._id.toString();
                  return (
                    <button
                      key={s._id.toString()}
                      onClick={() => setSelectedId(s._id!.toString())}
                      className={`w-full rounded-lg border px-3 py-2 text-left transition
                      ${
                        active
                          ? "border-blue-500 bg-[#2a2a2a]"
                          : "border-neutral-800 bg-[#202020] hover:bg-[#262626]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-[11px] text-neutral-300">
                          Age {s.age}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-neutral-400">
                        {s.email}
                      </p>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* ── Right: selected student + enroll ── */}
          <div className="rounded-xl border border-neutral-800 bg-[#1f1f1f]">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
              <h2 className="text-sm font-medium">Selected Student</h2>
              {loading.details && (
                <span className="text-xs text-neutral-400">Loading…</span>
              )}
            </div>

            <div className="p-4">
              {!selectedId ? (
                <p className="text-sm text-neutral-400">Pick a student.</p>
              ) : !selected ? (
                <p className="text-sm text-neutral-400">Not found.</p>
              ) : (
                <>
                  <div className="rounded-lg border border-neutral-800 bg-[#202020] p-4">
                    <h3 className="text-base font-medium">{selected.name}</h3>
                    <p className="mt-1 text-xs text-neutral-300">
                      Age {selected.age} • {selected.email}
                    </p>
                  </div>

                  {/* Enrolled */}
                  <div className="mt-5">
                    <h4 className="text-sm font-medium">Enrolled Courses</h4>
                    {}
                    <div className="mt-2 space-y-2">
                      {Array.isArray(selected.courses) &&
                      selected.courses.length > 0 ? (
                        selected.courses.map((c: any) => {
                          console.log('hiiiiiiiii',selected.courses);
                          const id = c._id ?? c;
                          const name = c?.name ?? `Course ${c.name}`;
                          const code = c?.code;
                          return (
                            <div
                              key={id}
                              className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#202020] px-3 py-2"
                            >
                              <div>
                                <p className="font-medium text-[15px]">{name}</p>
                                {code && (
                                  <p className="text-[11px] text-neutral-400">{code}</p>
                                )}
                              </div>
                              <button
                                onClick={() => unenroll(id)}
                                disabled={loading.action}
                                className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-500 disabled:opacity-60"
                              >
                                Unenroll
                              </button>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-sm text-neutral-400">
                          Not enrolled in any courses.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="my-5 h-px bg-neutral-800" />

                  {/* Enroll picker */}
                  <div>
                    <h4 className="text-sm font-medium">Enroll in a Course</h4>
                    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                      <select
                        value={pickCourseId}
                        onChange={(e) => setPickCourseId(e.target.value)}
                        className="flex-1 rounded-md border border-neutral-800 bg-[#2a2a2a] p-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a course…</option>
                        {courses.map((c) => (
                          <option
                            key={c._id.toString()}
                            value={c._id.toString()}
                            disabled={enrolledSet.has(c._id)}
                          >
                            {c.name} {c.code ? `(${c.code})` : ""}
                            {enrolledSet.has(c._id) ? " — enrolled" : ""}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={enroll}
                        disabled={
                          !selected ||
                          !pickCourseId ||
                          enrolledSet.has(pickCourseId) ||
                          loading.action
                        }
                        className="whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60"
                      >
                        {loading.action ? "Processing…" : "Enroll"}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {msg && <p className="mt-4 text-xs text-neutral-300">{msg}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
