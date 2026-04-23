import { VacancyProfileView } from "@/views/vacancy-profile";

type VacancyProfileSearchParams = {
  title?: string | string[];
  school?: string | string[];
};

export default async function VacancyProfilePage({
  searchParams,
}: {
  searchParams?:
    | VacancyProfileSearchParams
    | Promise<VacancyProfileSearchParams>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const rawTitle = resolvedParams?.title;
  const vacancyTitle = Array.isArray(rawTitle) ? rawTitle[0] : rawTitle;
  const rawSchool = resolvedParams?.school;
  const schoolName = Array.isArray(rawSchool) ? rawSchool[0] : rawSchool;

  return <VacancyProfileView vacancyTitle={vacancyTitle} schoolName={schoolName} />;
}
