# Sistema Óseo 🦴

Un sistema web educativo desarrollado con Django para aprender sobre la anatomía ósea humana.

## 🚀 Características

- Interfaz interactiva y responsive
- Información detallada sobre diferentes huesos:
  - Esternón
  - Clavícula 
  - Escápula
- Imágenes y videos educativos
- Diseño moderno con Bootstrap 5

## 🛠️ Tecnologías

- Python 3.x
- Django 5.2.1
- Bootstrap 5
- WhiteNoise 6.9.0
- HTML/CSS/JavaScript

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Crea y activa un entorno virtual:
```bash
python -m venv bones-env
source bones-env/Scripts/activate  # En Windows
```

3. Instala las dependencias:
```bash
pip install -r requirements.txt
```

4. Realiza las migraciones:
```bash
python manage.py migrate
```

5. Inicia el servidor:
```bash
python manage.py runserver
```

## 📁 Estructura del Proyecto

```
BoneSystem/
├── Home/                   # Aplicación principal
│   ├── static/             # Archivos estáticos
│   ├── templates/          # Plantillas HTML
│   └── views.py            # Vistas de la aplicación
├── BoneSystem/             # Configuración del proyecto
├── manage.py
└── requirements.txt
```

## 🌐 Despliegue

El proyecto está configurado para ser desplegado en Vercel. Usa el archivo `vercel.json` para la configuración.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles.

## Contacto

Email: rubevel10@gmail.com
Website: https://bone-system.vercel.app/
