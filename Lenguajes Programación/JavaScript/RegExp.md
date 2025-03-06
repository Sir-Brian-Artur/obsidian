
---

## **📌 Desglose de la expresión regular /^[XYZ]\d{7}$/**
Antes de mostrarte recursos, quiero explicarte *cómo construí la regex paso a paso* usando una tabla de símbolos comunes.

| *Símbolo* | *Significado*                       | *Ejemplo*                               |
| --------- | ----------------------------------- | --------------------------------------- |
| ^         | *Inicio de la cadena*               | ^Hola → Debe empezar con "Hola"         |
| [XYZ]     | *Un solo carácter que sea X, Y o Z* | X, Y, Z son válidos, A no.              |
| \d        | *Cualquier número (0-9)*            | \d{3} acepta "123", "456", etc.         |
| {7}       | *Repetir lo anterior 7 veces*       | \d{7} acepta "1234567", pero no "12345" |
| $         | *Fin de la cadena*                  | \d$ → Debe terminar en un número        |

🔹 *Ejemplo práctico:*  
^[XYZ]\d{7}$ significa:
- Debe *comenzar* con X, Y o Z
- Seguido de *exactamente 7 números*
- *Nada más antes o después*  

✅ X1234567 (Válido)  
❌ A1234567 (Inválido, porque no empieza con X, Y o Z)  
❌ X12345 (Inválido, porque faltan números)  
❌ X12345678 (Inválido, porque tiene un número extra)  

---
