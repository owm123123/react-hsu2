export function users() {
    return fetch("http://localhost:3000/users").then(res => res.json());
}