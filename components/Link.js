import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const MyLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props}>
    <a style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "start",
      inlineSize: "fit-content",
    }}>
      {props.children}
    </a>
  </Link>
));

MyLink.displayName = 'MyLink';

export default MyLink
