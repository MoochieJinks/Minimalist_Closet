import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>The purpose of this app is to assist those who are interested in Minimalism with keeping their closet organized!</p>
        <p></p>
        <ul>A few pieces of inspiration for the app:
          <li> Goodbye Things: <a href="https://www.amazon.com/Goodbye-Things-New-Japanese-Minimalism/dp/0393609030/ref=asc_df_0393609030/?tag=hyprod-20&linkCode=df0&hvadid=312111868535&hvpos=&hvnetw=g&hvrand=14051022596806135104&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9019687&hvtargid=pla-306850767101&psc=1"> Fumio Sasaki </a></li>
          <li> Tiny Houses: <a href='https://www.amazon.com/gp/product/B00OHXAS6W/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00OHXAS6W&linkCode=as2&tag=jackkrier09-20&linkId=d5c3225b59cac42eafcb35f2bef42711'>Mimi Zeiger</a></li>
          <li> Sustainable Minimalism: <a href="https://www.amazon.com/Sustainable-Minimalism-Sustainability-Minimalist-Sacrificing/dp/1642505013/ref=asc_df_1642505013/?tag=hyprod-20&linkCode=df0&hvadid=509144205027&hvpos=&hvnetw=g&hvrand=14051022596806135104&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9019687&hvtargid=pla-1102046928937&psc=1"> Stephanie Marie Seferian </a></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
