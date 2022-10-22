import Head from 'next/head'

export default function SEO({ title, description, url }) {
    return (
        <Head>
          <title>{title} / Odyssey346&apos;s Services</title>
          <meta name="title" content={title} />
          <meta name="description" content={description}/>
          <meta name="theme-color" content="#0a0f1a"/>
    
          <link rel="canonical" href={url}/>
    
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
    
          <meta property="twitter:title" content={title}/>
          <meta property="twitter:description" content={description}/>
    
    
          <meta name="keywords" content="odyssey346, odyssey, invidious, rimgo, breezewiki, proxitok, quetre, nitter, odyssey346 status"/>
        </Head>
      );
}