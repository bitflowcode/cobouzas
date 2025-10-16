#!/bin/bash
# Script para corregir la versión de Java después de npx cap sync
# Ejecutar con: ./fix-java-version.sh

echo "🔧 Corrigiendo versión de Java de 21 a 17..."

# Corregir capacitor.build.gradle
sed -i '' 's/VERSION_21/VERSION_17/g' android/app/capacitor.build.gradle
echo "✅ android/app/capacitor.build.gradle corregido"

# Corregir build.gradle de plugins
sed -i '' 's/VERSION_21/VERSION_17/g' android/capacitor-cordova-android-plugins/build.gradle
echo "✅ android/capacitor-cordova-android-plugins/build.gradle corregido"

echo "✅ Versión de Java corregida correctamente"

