import { Link } from 'react-router-dom'

// This is what a react functional component looks like
// It's basically an individual component that you can reuse anywhere you want
// This one in particular, is a link, same as an 'a' tag in html
// Click on it and it will take you to a different url
// It's not actually a button but it can be used as a button
function FunctionalBtn ({title, whichClass, alt}) {
    // This is a regex
    // A regex in Js starts and ends with '/'
    // \s is the key for whitespace
    // \/ is the key for '/'
    // | Is Or
    // So this looks through the whole string and where it finds a white space OR a '/', it will replace it with a '-'
    // Urls use '-' rather than a space so that's why we replace the whitespace
    // The reason for this, is so you can pass one argument and the endpoint names more sense 
    const path = title.replace(/\s|\//, '-').toLowerCase();

    // Every react component returns some html
    // This doesn't look like html but it is underneath
    // This can be expanded to <a href="/path" class="whichClass" alr = "alt"> title <a/>
    // As you can see in other components, you can return a mixture of html and react components as they are the same thing.
    // The arguments are passed as objects (the curly braces mean objects in Js) 
    // This can also be used to write inline JS which we will see later
    return (  
        <Link to={'/' + path} className={whichClass} alt={alt}>{title}</Link>
    );

}

export default FunctionalBtn ;