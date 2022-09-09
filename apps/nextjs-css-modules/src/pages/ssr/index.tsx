import type { GetServerSideProps } from "next";
import { Suspense } from "react";

import { Streaming } from "~/src/components/common/Streaming";
import { SamplePage } from "~/src/components/pages/SamplePage";

type Props = {
  readonly requestedDate: string;
};

const SSRPage = ({ requestedDate }: Props) => (
  <SamplePage title="SSR Page">
    <p>Requested Date: {requestedDate}</p>
    <Suspense>
      <Streaming title="SSR Streaming" />
    </Suspense>
  </SamplePage>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: {
    requestedDate: new Date().toLocaleString(),
  },
});

export default SSRPage;
