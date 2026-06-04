## 📥 Download APK

Tải phiên bản Android mới nhất:

[[APK Download Link](https://expo.dev/artifacts/eas/kXncdzbzKRBwRJ3uCHtqzD.apk)]

Sau khi tải xuống, mở file APK để cài đặt trực tiếp trên thiết bị Android.

# 🍽️ Tasty Recipes

Ứng dụng mobile tra cứu công thức nấu ăn được xây dựng bằng **React Native**, **Expo Router** và **TypeScript**.

Dữ liệu món ăn được lấy từ **TheMealDB API**, cho phép người dùng:

- Xem danh sách món ăn
- Tìm kiếm món ăn theo tên
- Xem chi tiết công thức
- Xem nguyên liệu và định lượng
- Lưu món ăn yêu thích
- Quản lý danh sách yêu thích bằng AsyncStorage

---

## 📱 Screens

### Home

- Hiển thị danh sách món ăn
- Tìm kiếm theo tên
- Điều hướng đến màn hình chi tiết

### Recipe Detail

- Ảnh món ăn
- Tên món ăn
- Danh sách nguyên liệu
- Hướng dẫn chế biến
- Thêm/Xóa khỏi danh sách yêu thích

### Favorites

- Hiển thị các món đã lưu
- Xóa món khỏi danh sách yêu thích
- Điều hướng đến trang chi tiết

---

## 🛠️ Tech Stack

### Frontend

- React Native
- Expo
- Expo Router
- TypeScript

### State Management

- React Hooks
  - useState
  - useEffect

### Networking

- Axios

### Local Storage

- AsyncStorage

### API

- TheMealDB

---

## 📂 Project Structure

```text
src
├── app
│   ├── (tabs)
│   │   ├── index.tsx
│   │   ├── favorites.tsx
│   │   └── _layout.tsx
│   ├── recipe
│   │   └── [id].tsx
│   └── _layout.tsx
│
├── components
│   ├── EmptyState.tsx
│   ├── Loading.tsx
│   ├── RecipeCard.tsx
│   └── SearchBar.tsx
│
├── hooks
│   ├── useFavorites.ts
│   └── useRecipes.ts
│
├── screen
│   ├── HomeScreen.tsx
│   ├── RecipeDetailScreen.tsx
│   └── FavoritesScreen.tsx
│
├── services
│   ├── api.ts
│   └── mealApi.ts
│
├── storage
│   └── favorite.ts
│
└── types
    └── meal.ts
```

---

## 🚀 Installation

### Clone project

```bash
git clone <repository-url>
cd tasty-recipes
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run start
```

---

## ▶️ Run Application

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

---

## 🌐 API

Dự án sử dụng:

- TheMealDB API

Tài liệu:

https://www.themealdb.com/api.php

Ví dụ:

### Danh sách món ăn

```http
GET https://www.themealdb.com/api/json/v1/1/search.php?s=
```

### Tìm kiếm món ăn

```http
GET https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

### Chi tiết món ăn

```http
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
```

---

## ❤️ Favorite Storage

Danh sách yêu thích được lưu cục bộ bằng AsyncStorage.

Các chức năng:

- Lưu món yêu thích
- Kiểm tra trạng thái yêu thích
- Xóa món yêu thích
- Đọc toàn bộ danh sách yêu thích

---

## ✨ Features

- [x] Browse recipes
- [x] Search recipes
- [x] View recipe details
- [x] Display ingredients
- [x] Display cooking instructions
- [x] Save favorite recipes
- [x] Remove favorite recipes
- [x] Persistent local storage

---

## 📄 License

This project is for learning and educational purposes.

## 📦 Build Release App

Dự án sử dụng Expo nên có thể build file cài đặt bằng EAS Build.

### Cài đặt EAS CLI

```bash
npm install -g eas-cli
```

Đăng nhập Expo:

```bash
eas login
```

Khởi tạo cấu hình build:

```bash
eas build:configure
```

---

## 🤖 Build APK (Android)

Build file APK để cài trực tiếp trên thiết bị Android:

```bash
eas build --platform android --profile preview
```

Hoặc:

```bash
eas build -p android
```

Sau khi build hoàn tất, Expo sẽ cung cấp link tải file `.apk`.

### Cài đặt APK

1. Tải file APK về điện thoại
2. Cho phép cài đặt từ nguồn không xác định (Unknown Sources)
3. Mở file APK
4. Chọn Install

---

## 🤖 Build AAB (Google Play)

Build file Android App Bundle:

```bash
eas build --platform android --profile production
```

File tạo ra:

```text
.aab
```

Dùng để phát hành lên Google Play Store.

---

## 🍎 Build iOS

Build file iOS:

```bash
eas build --platform ios
```

Expo sẽ tạo file:

```text
.ipa
```

Có thể cài qua:

- TestFlight
- Apple Configurator
- MDM
- Ad Hoc Distribution

---

## 📲 Local Development Build

Tạo bản Development Build:

```bash
eas build --profile development --platform android
```

hoặc

```bash
eas build --profile development --platform ios
```

---

## 🔍 Kiểm tra cấu hình

```bash
eas build:list
```

Xem lịch sử build:

```bash
eas build:list --limit 10
```

---

## 📋 Build Profiles

Ví dụ `eas.json`:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  }
}
```
