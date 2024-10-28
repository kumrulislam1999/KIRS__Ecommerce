import React from 'react'

/* --=======================================
    Start Import Components Here 
========================================-- */
import Header2 from "./header/header2/Header2";
import Footer from './footer/Footer';
import { Helmet } from 'react-helmet';
/* --=======================================
    End Import Components Here 
========================================-- */


const Layout = ({children,title,description,keywords, author}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header2/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

Layout.defaultProps = {
  title : "Kirs Ecommerce App",
  description : "Ecommerce Web Application",
  keywords : "Node, React, HTML, CSS, Bootstrap",
  author : "Kumrul Islam"
}
export default Layout
