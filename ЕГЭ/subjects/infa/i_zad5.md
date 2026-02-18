| дни            | часы | рим всего | рим правильно | рим процент |     |
| -------------- | ---- | --------- | ------------- | ----------- | --- |
|                |      |           |               |             |     |
| [[2026_02_03]] | 1.5  | 0         | 0             | 0           |     |
| [[2026_02_04]] | 0.75 | 0         | 0             | 0           |     |
| [[2026_02_05]] | 0.75 | 2         | 2             | 100         |     |
| [[2026_02_16]] | 0.75 | 0         | 0             | 0           |     |
^table

```chart
type: line
id: table
layout: columns
width: 100%
beginAtZero: true
```


# Памятка:
нужно запомнить перевод систем счисления, а именно конструкцию
``` python
def pr (chislo, osnov):
    ost = 0
    output = ""
    while chislo > 0:
        ost = chislo % osnov
        output = str(ost) + output
        chislo = chislo // osnov
    return output
```

## а так же знать функции:
количество символов / элементов в строке/массиве:
```python 
i = "0123456"
len(i) #вернет 7 
```

замена первого значения на второе в строке:
```python 
i = "0123456"
i.replace("1","2") #вернет 0223456
```

обрезка 1 символа начиная с начала :
```python
i = "0123456" 
i = i [1:] #вернет 123456
```





 пример решения: ![[Pasted image 20260216233034.png]]
```python
#5 задание

def pr (chislo, osnov):

    ost = 0

    output = ""

    while chislo > 0:

        ost = chislo % osnov

        output = str(ost) + output

        chislo = chislo // osnov

    return output

  

arr = []

arr2 = []

for n in range (1, 10000):

    n6 = pr(n, 6)

    if n6 [len(n6)-1:] == "3":

        n6 = n6.replace("2","7")

        n6 = n6.replace("0","2")

        n6 = n6.replace("7","0")

        n6 = '10' + n6

    else:

        n6 += "15"

        n6 = "3" + n6[1:]

    r = int(n6, 6)

    if r < 1299:

        arr += [n]

        arr2 += [r]

print(max(arr2))#Сначала находим максимальное значения arr2 оно равно 839
```

```python
#5 задание

def pr (chislo, osnov):

    ost = 0

    output = ""

    while chislo > 0:

        ost = chislo % osnov

        output = str(ost) + output

        chislo = chislo // osnov

    return output

  

arr = []

arr2 = []

for n in range (1, 10000):

    n6 = pr(n, 6)

    if n6 [len(n6)-1:] == "3":

        n6 = n6.replace("2","7")

        n6 = n6.replace("0","2")

        n6 = n6.replace("7","0")

        n6 = '10' + n6

    else:

        n6 += "15"

        n6 = "3" + n6[1:]

    r = int(n6, 6)

    if r == 839: # сюда вписываем максимальное значение arr2

        arr += [n]

print (arr)
```
