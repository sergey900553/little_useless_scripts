import os
import glob
dir = r'C:\Users\serge\Downloads\s\*.osk'
files = glob.glob(dir)

for file in files:
    if file.endswith(".osk"):
        print(file)
        os.startfile(file)

     
