def escolha_usuario
  puts "Digite uma palavra ou FIM"
  prompt = gets.chomp
  puts "\n"
  prompt
end

def node(p)
  {
    palavra: p,
    proximo: nil
  }
end

def exibe_lista(primeiro)
  atual = primeiro
  lista = []
  while atual
    lista << atual[:palavra]
    atual = atual[:proximo]
  end
  puts 'Lista Ordenada'
  puts lista.join("\n")
  puts "\n"
end

primeiro = nil

until (resposta = escolha_usuario) == 'FIM' do
  inserido = node(resposta)
  if primeiro.nil?
    primeiro = inserido
  elsif inserido[:palavra] < primeiro[:palavra]
    inserido[:proximo] = primeiro
    primeiro = inserido
  else
    if primeiro[:proximo].nil?
      primeiro[:proximo] = inserido
    else
      corrente = primeiro[:proximo]
      anterior = primeiro
      until inserido[:palavra] < corrente[:palavra] do
        if corrente[:proximo].nil?
          anterior = nil
          break
        end
        anterior = corrente
        corrente = corrente[:proximo]
      end
      anterior.nil? ? corrente[:proximo] = inserido : anterior[:proximo] = inserido
      inserido[:proximo] = corrente unless anterior.nil?
    end

  end
  exibe_lista(primeiro)
  puts "\n"
end
