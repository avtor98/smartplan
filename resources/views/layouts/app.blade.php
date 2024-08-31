<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>@yield('title')</title>
    @vite('resources/scss/index.scss')
    @vite('resources/js/app.js')
</head>
<body>
<div id="app">
    @yield('content')
</div>
</body>
</html>
