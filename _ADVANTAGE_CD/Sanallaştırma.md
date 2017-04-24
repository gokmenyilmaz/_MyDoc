# Sanallaştırma
https://www.youtube.com/c/wikigain




# VirtualBox-Sierra
https://plus.google.com/+SysAdminsHowtos/posts/6e98eRghsw1

https://www.youtube.com/watch?v=6BFEAtlT5xc&feature=youtu.be

- Bios tan cpu virtualization aktif olmalı
- 64 bit desteği için hyperv aktifse kaldırılmalı
- Mac için efi kapatılmalı
- Usb lere destek için Extension paket yüklenmeli
- Sanal makina adını "macOS Sierra" yap
- Aaşağıdaki işlemleri yap

````
cd "C:\Program Files\Oracle\VirtualBox\"
  VBoxManage.exe modifyvm "macOS Sierra" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
  VBoxManage setextradata "macOS Sierra" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
  VBoxManage setextradata "macOS Sierra" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
  VBoxManage setextradata "macOS Sierra" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
  VBoxManage setextradata "macOS Sierra" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
  VBoxManage setextradata "macOS Sierra" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
````

- Full hd ekran için
  -  VBoxManage setextradata "macOS Sierra" VBoxInternal2/EfiGopMode 5
- Kurulumda izlencelerden disk sil sonra kendi boş alan oluşturuyor


# VmWare ve Virtualbox - Sierra
http://www.wikigain.com/install-macos-sierra-10-12-vmware/

http://www.wikigain.com/install-macos-sierra-10-12-virtualbox/

https://drive.google.com/drive/folders/0B-PSijxodhB1OUZlLURhLUYwS2s
