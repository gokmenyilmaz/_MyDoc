# NATIVE IMAGE GENERATOR

## JIT
Code-> IL-> Machine Code

## Native Image Generator
Code->Machine Code(windows PE Image)

Sdk Folder
C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools

Native Code Generator
Developer Command Promt

ngen install c:\source\bin\release\wpfApplication.exe
ngen uninstall wpfApplication.exe

C:\Windows\assembly bu klasör alıtına kopyalanır. wpfApplication.ni.exe şeklinde 64 veya 32 bit olmasına
göre klasör altına atılır

FUSLOGVW.exe ile kontrol edilebilir. Native image çağrılıp çağırılmadığı loglardan anlaşılabilir
Bu uygulama kontrol edilecek uygulamadan önce çalıştırılmalı

ProcessExplorer(sysinternals)
Uygulama çalışırken eş zamanlı olarak .ni.exe dosyaları takip edilebilir


