import type {ReactNode} from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="サイトの説明をここに書きます">
      
      {/* 以前の HomepageHeader は消して、直接 main を書くのが一番シンプルです */}
      <main className={styles.mainContainer}>
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

        </div>
      </main>
    </Layout>
  );
}
