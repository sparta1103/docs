import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: "Free & Open Source",
    imageUrl: "img/wallet-solid.webp",
    description: (
      <>
        PteroBilling is completely free and licensed under the MIT license. Our source code is available to public on Github.
      </>
    ),
  },
  {
    title: "Automate Billing",
    imageUrl: "img/money-bill-wave-solid.webp",
    description: (
      <>
        We collect payments, issue invoices, send email notifications, and create panel users and servers automatically.
      </>
    ),
  },
  {
    title: "User & Developer Friendly",
    imageUrl: "img/users-cog-solid.webp",
    description: (
      <>
        Our user interface is simple, beautiful, powerful, and extendable, with the support for making extensions and customization.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Welcome"
      description="An open-source Laravel 8 online store, client area, and billing software specially made for Pterodactyl panel">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/welcome')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
