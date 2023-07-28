// cookieLibrary.js
const cookieLibrary = {
    getCookie: function (cookieName) {
      const name = cookieName + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");
  
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return null;
    },
  
    setCookie: function (cookieName, cookieValue, expiryDate) {
      let cookie = cookieName + "=" + cookieValue;
  
      if (expiryDate) {
        const expires = "expires=" + expiryDate.toUTCString();
        cookie += ";" + expires;
      }
  
      document.cookie = cookie;
    },
  
    deleteCookie: function (cookieName) {
      document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  
    allCookieList: function () {
      const decodedCookie = decodeURIComponent(document.cookie);
      return decodedCookie.split(";");
    },
  
    hasCookie: function (cookieName) {
      return this.getCookie(cookieName) !== null;
    },
  };
  