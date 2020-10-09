        /*
			Zmiana ustawionej wartości na DOWOLNYM suwaku, powoduje
			odczytanie aktualnych wartości na WSZYSTKICH suwakach
			i ustawienie składowych R G B koloru tła zgodnie z tymi odczytami.
		*/
		const body=document.querySelector('body');
		
		const wynik=document.querySelector('#wynik');
		
		const r=document.querySelector('#r');
		const g=document.querySelector('#g');
		const b=document.querySelector('#b');
		
		let red=0; let green=0; let blue=0;
		
		r.addEventListener("input", function(){
            red=r.value; green=g.value; blue=b.value;
			wynik.innerHTML=red;
			body.style.backgroundColor='rgb('+red+','+green+','+blue+')';
		});
		
		g.addEventListener("input", function(){
            red=r.value; green=g.value; blue=b.value;
			wynik.innerHTML=green;
			body.style.backgroundColor='rgb('+red+','+green+','+blue+')';
		});
		
		b.addEventListener("input", function(){
            red=r.value; green=g.value; blue=b.value;
			wynik.innerHTML=blue;
			body.style.backgroundColor='rgb('+red+','+green+','+blue+')';
		});