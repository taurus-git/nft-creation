export const generateKey = pre => {
    return `${ pre }_${ new Date().getTime() }`;
}

export const getRandomInt = max => {
    return Math.floor( Math.random() * max );
}
