    import React, { useEffect, useRef } from 'react';

    const BeehiivEmbed = ({ embedCode }) => {
      const embedRef = useRef(null);

      useEffect(() => {
        if (embedRef.current) {
          embedRef.current.innerHTML = embedCode;
          // Re-execute scripts if necessary (for some beehiiv widgets)
          Array.from(embedRef.current.getElementsByTagName('script')).forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
          });
        }
      }, [embedCode]);

      return <div ref={embedRef} />;
    };

    export default BeehiivEmbed;