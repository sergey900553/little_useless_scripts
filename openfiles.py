import os
dir = r'C:\Users\serge\Downloads\s'
for file in os.listdir(dir):
    if file.endswith(".osk"):
        os.startfile(os.path.join(dir, file))
        print(os.path.join(dir, file))