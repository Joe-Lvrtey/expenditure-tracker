import { company } from "../data/site";

type pageMetaOptions = {
  title: string;
  description: string;
};

export default function pageMeta({ title, description }: pageMetaOptions) {
  const fullTitle = `${title} | ${company.name}`;

  return [{ title: fullTitle }, { name: description }];
}
