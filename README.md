# Лендинг тестовой верстки

## Перед стартом проекта необходимо:

* Убедиться, что в системе установлены nod.js и npm. Для этого достаточно ввести команды

> node -v

> npm -v

Если вы  в обоих случаях видите версию, то тогда всё окей.

* Убедиться, что стоит gulp четвертой версии. Если четвертая версия не установлена, выполнить установку по команде

```
# Uninstall previous Gulp installation and related packages, if any
$ npm rm gulp -g
$ npm rm gulp-cli -g
$ cd [your-project-dir/]
$ npm rm gulp --save-dev
$ npm rm gulp --save
$ npm rm gulp --save-optional
$ npm cache clean

# Install the latest Gulp CLI tools globally
$ npm install gulpjs/gulp-cli -g

# Install Gulp 4 into your project from 4.0 GitHub branch as dev dependency
$ npm install gulpjs/gulp#4.0 --save-dev

# Check the versions installed. Make sure your versions are not lower than shown.
$ gulp -v
---
[10:48:35] CLI version 1.2.2
[10:48:35] Local version 4.0.0-alpha.2
```

## Инструкция для старта проекта:

* Склонировать данный репозиторий с помощью команды

> git clone https://github.com/Evgheni-Nichitenco/test-landing.git

* Запустить команду npm install в терминале. Данная команда установит все пакеты, которые указаны в файле
packaje.json, а также все их зависимости
