import type { GetStaticProps } from "next";
import { Suspense } from "react";

import { Streaming } from "~/src/components/common/Streaming";
import { SamplePage } from "~/src/components/pages/SamplePage";

type Props = {
  readonly generatedDate: string;
};

const SSGPage = ({ generatedDate }: Props) => (
  <SamplePage title="SSG Page">
    <p>Generated Date: {generatedDate}</p>
    <Suspense>
      <Streaming title="SSR Streaming" />
    </Suspense>
  </SamplePage>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    generatedDate: new Date().toLocaleString(),
  },
});

export default SSGPage;
