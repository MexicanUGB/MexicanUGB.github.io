body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
}

header {
    background-color: #111;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: #ff0000;
    text-decoration: none;
}

main {
    padding: 20px;
}

h1, h2 {
    color: #ff0000;
}

.game-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.game-item {
    background-color: #222;
    border: 1px solid #444;
    margin: 10px;
    padding: 20px;
    width: 200px;
    text-align: center;
    border-radius: 10px;
}

.game-item a {
    color: #ff0000;
    text-decoration: none;
    border: 1px solid #ff0000;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 10px;
}

.game-item a:hover {
    background-color: #ff0000;
    color: #000;
}

footer {
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}

label, input, textarea, button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}

input, textarea {
    padding: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #222;
    color: #fff;
}

button {
    background-color: #ff0000;
    color: #000;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #ff4444;
}
