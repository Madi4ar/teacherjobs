import { TeachersProfileView } from "@/views/teachers-profile";

type TeachersProfileSearchParams = {
  name?: string | string[];
};

export default async function TeachersProfilePage({
  searchParams,
}: {
  searchParams?:
    | TeachersProfileSearchParams
    | Promise<TeachersProfileSearchParams>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const rawName = resolvedParams?.name;
  const teacherName = Array.isArray(rawName) ? rawName[0] : rawName;

  return <TeachersProfileView teacherName={teacherName} />;
}
