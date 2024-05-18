#TERMÔMETRO

print('-' * 40)
print(' >>>>>> CALULO DE TEMPERATURA <<<<<< ')
print('-' * 40)

while True:
    
    temp = float(input(f'Temperatura Cº:  '))

    # definindo os valores para cada tipo de variavel

    if temp >= 34 and temp < 35.5:
        print(f'Temperatura de {temp}Cº está com HIPOTERMIA.')
        break
    elif temp >= 35.6 and temp <= 37:
        print(f'Temperatura de {temp}Cº está NORMAL.')
        break
    elif temp >= 37.1 and temp <= 37.9:
        print(f'Temperatura de {temp}Cº está com ESTADO FEBRIL.')
        break

    elif temp >= 38 and temp <= 39.4:
        print(f'Tempretaura de {temp}Cº está com FEBRE.')
        break

    elif temp >= 39.5 and temp <= 42.4:
        print(f'Temperatura de {temp}Cº está com FEBRE ALTA.')
        break

    else:
        print('ERRO! Digite um temperatura válida.')

    resp = ' '
    while resp not in 'SN':
        resp = str(input('Quer Continuar? [S/N]: ')).strip().upper()[0]
    if resp == 'N':
        break
