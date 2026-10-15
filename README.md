# hello-pages

Статический сайт (HTML + CSS + JS) с автоматическим деплоем на **GitHub Pages** через **GitHub Actions**.

## 🌐 Сайт

👉 **https://xem1zo.github.io/hello-pages/**

## 📌 Цель работы

Настроить CI/CD для статического сайта: при push в `main` сайт автоматически собирается и публикуется на **GitHub Pages**.

## 🎯 Что делает CI/CD

**Job `validate`** — запускается при push в `main`:
- Проверяет наличие `index.html`, `style.css`, `script.js`
- Базовая валидация HTML (наличие `<!DOCTYPE html>` и `</html>`)

**Job `deploy`** — после успешной валидации:
- Загружает сайт как артефакт
- Публикует на GitHub Pages
- URL: `https://xem1zo.github.io/hello-pages/`

## 📂 Структура проекта

```
hello-pages/
├── .github/workflows/deploy.yml
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## 🚀 Запуск локально

Просто откройте `index.html` в браузере — или запустите локальный сервер:

```bash
# Python 3
python -m http.server 8000

# или Node.js
npx http-server -p 8000
```

Откройте http://localhost:8000

## 🛠 Что использовано

- **HTML5** — семантическая разметка
- **CSS3** — современные стили, градиенты, flexbox
- **JavaScript** — работа с DOM, обработка событий
- **GitHub Actions** — CI/CD для деплоя
- **GitHub Pages** — бесплатный хостинг статики

## ✅ Результат

- ✅ Проверка HTML при push в `main`
- ✅ Автоматический деплой на GitHub Pages
- ✅ Сайт обновляется автоматически через ~1 минуту после push

**Actions:** https://github.com/xem1zo/hello-pages/actions

## 📝 Вывод

Освоил:
- Настройку CI/CD для статического сайта
- Работу с GitHub Pages через Actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`)
- Разделение на job'ы: validate → deploy
- Права `pages: write`, `id-token: write` для деплоя