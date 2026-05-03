# Node.js'in hafif bir versiyonunu temel alıyoruz
FROM node:16-slim

# Uygulama klasörünü oluştur
WORKDIR /usr/src/app

# Sadece bağımlılık listesini kopyala (hız kazandırır)
COPY package*.json ./

# Kütüphaneleri yükle
RUN npm install

# Geri kalan tüm kodu kopyala
COPY . .

# Uygulamanın çalışacağı portu belirt
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "app.js"]