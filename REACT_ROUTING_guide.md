**Гайд по маршрутизации в React с React Router**

В React **нет встроенной маршрутизации**.

👉 Поэтому используется React Router — библиотека, которая:

- управляет URL
- показывает нужные компоненты
- делает навигацию без перезагрузки страницы

---

## Как это работает

```
URL → React Router → нужный компонент
```

Пример:

```
/about → <About />
/products → <Products />
```

---

# 📌 1. Установка

```bash
npm install react-router-dom
```

---

# 📌 2. Подключение Router (обязательно)

### `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/React-Movie-Search-App/">
      {' '}
      //!!!
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### Что делает `BrowserRouter`

- хранит историю переходов
- передает её всем компонентам
- позволяет менять URL без перезагрузки

---

# 📌 3. Базовые компоненты

## Routes и Route

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>;
```

### Важно:

- `Routes` — выбирает ОДИН маршрут
- `Route` — описывает путь

👉 `Route` рендерит:

- компонент → если путь совпал
- `null` → если нет

---

# 📌 4. 404 страница (обязательно)

```jsx
<Route path="*" element={<NotFound />} />
```

### Как это работает:

- `*` = любой путь
- срабатывает, если ничего не подошло

---

# 📌 5. Структура проекта (production)

```
src/
  pages/
  components/
  layouts/
  routes/
```

### Объяснение:

- `pages` → страницы
- `components` → UI куски
- `layouts` → шаблоны страниц
- `routes` → логика маршрутов

---

# 📌 6. Layout + Outlet (ключевая тема)

## Layout

```jsx
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet /> //! место, куда вставится дочерний маршрут
      </main>
      <footer> </footer>
    </>
  );
}
```

## Использование

```jsx
<Routes>
  <Route element={<SharedLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>

  <Route path="*" element={<NotFound />} />
</Routes>
```

### Что делает `Outlet`

👉 место, куда вставится дочерний маршрут

---

# 📌 7. Навигация

**NavLink** автоматически добавляет стили (класс active или inline-стили) к
элементу, когда его путь совпадает с текущим URL, что идеально подходит для меню
навигации, тогда как **Link** — это простая ссылка.

## Link

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>;
```

## NavLink

```jsx
<NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
  About
</NavLink>
```

### Почему не `<a>`

- `<a>` → перезагрузка страницы ❌
- `Link` → SPA переход ✅

---

# 📌 8. Вложенные маршруты (Nested)

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Важно:

- путь `"profile"` = `/dashboard/profile`
- без `/` → относительный путь

---

# 📌 9. Индексный маршрут

```jsx
<Route index element={<Home />} />
```

### Это:

- маршрут по умолчанию внутри родителя
- без `path`

---

# 📌 10. Динамические параметры (очень важно)

```jsx
<Route path="/products/:productId" element={<ProductDetails />} />
```

## useParams

```jsx
import { useParams } from 'react-router-dom';

const { productId } = useParams();
```

👉 пример URL:

```
/products/123 → productId = 123
```

---

# 📌 11. Программная навигация

## useNavigate

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

navigate('/profile');
```

### replace

```jsx
navigate('/profile', { replace: true });
```

👉 заменяет текущую страницу (например после логина)

---

## Navigate (компонент)

```jsx
import { Navigate } from 'react-router-dom';

if (!isAuth) {
  return <Navigate to="/login" replace />;
}
```

---

# 📌 12. Query параметры (очень полезно)

URL:

```
/products?name=hoodie
```

## useSearchParams

```jsx
const [searchParams, setSearchParams] = useSearchParams();

const name = searchParams.get('name');
```

## изменение

```jsx
setSearchParams({ name: 'nike' });
```

---

# 📌 13. useLocation (продвинутый уровень)

```jsx
import { useLocation } from 'react-router-dom';

const location = useLocation();
```

### что внутри:

```js
{
  (pathname, search, hash, state);
}
```

---

## Передача состояния между страницами

```jsx
<Link to="/product/1" state={{ from: location }} />
```

## Получение

```jsx
const location = useLocation();

const backLink = location.state?.from ?? '/products';
```

---

# 📌 14. Lazy loading (обязательно в реальных проектах)

```jsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
```

## Обертка

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <Routes>{/* routes */}</Routes>
</Suspense>
```

---

## Важно (лайфхак)

👉 если есть Layout — лучше так:

```jsx
function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
```

👉 тогда header не мигает при загрузке страниц

---

# 📌 15. Protected Routes

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}
```

---

# 📌 16. Финальный пример (готовый шаблон)

```jsx
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './layouts/Layout';
import ProtectedRoute from './routes/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const isAuth = true;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback="Loading...">
              <Home />
            </Suspense>
          }
        />

        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <About />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Suspense fallback="Loading...">
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

---

# 📌 17. Итог (очень кратко)

| Что             | Роль                    |
| --------------- | ----------------------- |
| BrowserRouter   | включает роутинг        |
| Routes          | выбирает маршрут        |
| Route           | путь → компонент        |
| Outlet          | место вложенных страниц |
| Link            | переход без reload      |
| useNavigate     | переход из кода         |
| useParams       | параметры URL           |
| useSearchParams | query строка            |

---

# 🚀 Главное, что тебе нужно запомнить

1. React сам не умеет маршрутизацию
2. React Router = связь URL и UI
3. Layout + Outlet = основа архитектуры
4. Nested routes = масштабируемость
5. Lazy loading = оптимизация

---

Если хочешь — следующий шаг логичный: 👉 собрать **твой реальный проект (Movie
App)** с правильной архитектурой роутинга (как делают на работе)
