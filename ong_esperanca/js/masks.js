document.addEventListener('DOMContentLoaded', function () {
  function maskCpf(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }

  function maskTel(v){
    v = v.replace(/\D/g,'');
    if(v.length > 10){
      v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/,'($1) $2-$3');
    } else {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3');
    }
    return v;
  }

  function maskCep(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  var cpf = document.getElementById('cpf');
  var tel = document.getElementById('telefone');
  var cep = document.getElementById('cep');

  if(cpf){
    cpf.addEventListener('input', function(e){
      var pos = this.selectionStart;
      this.value = maskCpf(this.value);
      this.setSelectionRange(pos, pos);
    });
  }

  if(tel){
    tel.addEventListener('input', function(e){
      var pos = this.selectionStart;
      this.value = maskTel(this.value);
      this.setSelectionRange(pos, pos);
    });
  }

  if(cep){
    cep.addEventListener('input', function(e){
      var pos = this.selectionStart;
      this.value = maskCep(this.value);
      this.setSelectionRange(pos, pos);
    });
  }

  var form = document.getElementById('formCadastro');
  if(form){
    form.addEventListener('submit', function(ev){
      if(!form.checkValidity()){
        ev.preventDefault();
        form.reportValidity();
        return;
      }
      ev.preventDefault();
      alert('Cadastro simulado enviado. (Para salvar, conectar backend)');
      form.reset();
    });
  }
});
