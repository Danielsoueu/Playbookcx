import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, FileText, AlertCircle, CheckCircle2, MessageSquare, Target, ArrowRightLeft, Mail, ExternalLink, Copy, ChevronDown, ChevronUp, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CancellationGuide() {
  const [openEmailTemplate, setOpenEmailTemplate] = useState<number | null>(null);

  const toggleEmailTemplate = (index: number) => {
    setOpenEmailTemplate(openEmailTemplate === index ? null : index);
  };

  const emailTemplates = [
    {
      title: "Não reembolso de anual parcelado",
      color: "bg-red-500",
      content: `Oi, [nome do cliente]. Tudo bem? Espero que sim! 

Entendemos a sua solicitação, porém, conforme previsto em contrato, não conseguimos interromper o ciclo de parcelas uma vez que o processamento no cartão de crédito já foi realizado. As parcelas continuarão a ser cobradas nas datas acordadas até o pagamento total ser concluído.

Conforme a cláusula 8.3 de nossa política de cancelamento, após o período de 7 dias da contratação de planos anuais, não é possível realizar estorno por outros meios de pagamento. Agradecemos pela compreensão e estamos à disposição para qualquer dúvida adicional.`
    },
    {
      title: "Cancelamento até 7 dias (Uso Indevido)",
      color: "bg-orange-500",
      content: `Reforçamos que após o cancelamento, nenhum documento fiscal fornecido durante este período poderá ser utilizado para qualquer fim. Ou seja, nosso endereço e documentos fornecidos para esta contratação, a partir desta data, não são mais devidos para utilização. Sendo assim, fica acordado entre as partes que qualquer uso dos documentos e endereço fiscal da Company Hero sem uma contratação ativa, será enquadrado como indevido, combinado?`
    },
    {
      title: "Cliente deseja usar próprio endereço",
      color: "bg-blue-500",
      content: `Olá, [Nome do Cliente], tudo bem?

Recebemos sua solicitação de cancelamento e entendemos que você está considerando usar seu próprio endereço para abrir o CNPJ. Mas queremos te alertar sobre alguns riscos dessa decisão:

1️⃣ Exposição Pessoal: Seu endereço residencial ficará público, acessível em consultas pela internet. Isso pode comprometer sua privacidade e segurança.
2️⃣ Credibilidade Comprometida: Empresas com endereços comerciais bem localizados transmitem mais confiança e profissionalismo aos clientes e parceiros.
3️⃣ Problemas com Fiscalização: Autoridades podem questionar o uso do endereço residencial, o que pode gerar dores de cabeça desnecessárias.

Na Company Hero, oferecemos uma solução profissional que protege sua privacidade, fortalece a imagem do seu negócio e evita contratempos com a Receita Federal. Sem falar na praticidade de ter uma estrutura preparada para atender às suas necessidades.

Antes de tomar uma decisão, que tal conversarmos? Estamos aqui para mostrar que continuar com nosso serviço é a melhor escolha para o futuro da sua empresa.

Ficamos no aguardo da sua resposta!

Abraços,`
    },
    {
      title: "Cliente migrando para outro endereço",
      color: "bg-green-500",
      content: `Olá, [Nome do Cliente], tudo bem?

Entendemos que mudanças de endereço fazem parte da jornada empreendedora. Por isso, queremos lembrar que a Company Hero está aqui para garantir que sua empresa continue com toda a estrutura e credibilidade que precisa — independentemente da sua localização.

Sabia que temos mais de 300 unidades espalhadas pelo Brasil? Isso significa que, mesmo com a mudança, você pode contar com um endereço profissional estrategicamente localizado, perfeito para fortalecer a imagem do seu negócio.

Além disso, nossos planos incluem benefícios como:
✔️ Atendimento personalizado e suporte para resolver suas dúvidas;
✔️ Recebimento e gestão de correspondências com total segurança;
✔️ Proteção da sua privacidade, evitando expor o endereço residencial;
✔️ Acesso a uma rede de endereços comerciais reconhecidos e bem localizados.

Se o motivo da mudança for financeiro ou relacionado à localização, estamos aqui para criar uma solução que funcione para você. Vamos conversar?

Aguardamos sua resposta para seguir juntos nesse próximo capítulo do seu negócio!

Abraços,`
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 md:p-12 font-sans text-[#0A0A0A]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF005C] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          Voltar para o Dashboard
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#FF005C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Guia Operacional
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Como realizar o <span className="text-[#FF005C]">Cancelamento</span>
        </h1>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed">
          Siga este passo a passo para garantir que o processo de cancelamento seja realizado corretamente e dentro dos conformes.
        </p>

        <div className="space-y-8">
          {/* Objective Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Objetivo</h3>
                <ul className="space-y-3">
                  {[
                    "Como operacionalizar as solicitações de cancelamento de baixa e alteração.",
                    "Quando é um cliente inadimplente solicitando o cancelamento que usa o nosso endereço.",
                    "Processo de abertura de tickets que vem através do e-mail ajudafinanceiro@companyhero.com",
                    "O que outras áreas podem tratar, sem precisar passar para pipeline de retenção."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specific Process: Baixa/Alteração Concluída */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-50 text-green-600 rounded-2xl shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Cancelamento com Baixa/Alteração Concluída</h3>
                <p className="text-gray-500 mt-1">
                  Quando o cliente solicita cancelamento já com o comprovante de baixa ou alteração de endereço em mãos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Operational Steps */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText size={18} className="text-gray-400" />
                  Passo a passo operacional
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">1</span>
                    <span>Realizar a conferência da mudança de endereço/baixa no site da Receita Federal.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">2</span>
                    <span><strong>Suspender</strong> o plano na Iugu e também na Wagtail.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-600">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">3</span>
                    <span>
                      Enviar e-mail padrão de confirmação (Macro HubSpot: <strong>"Cancelamento Concluído"</strong>).
                      <br />
                      <span className="text-xs text-gray-400 mt-1 block">
                        No e-mail, clique em "Modelos", deixe proprietário como "qualquer" e pesquise por "Cancelamento Concluído".
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Warning / HubSpot */}
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                  <AlertCircle size={18} />
                  Registro no HubSpot (Obrigatório)
                </h4>
                <p className="text-sm text-orange-700 mb-4">
                  Todas as solicitações devem ser incluídas na <strong>Pipeline de retenção</strong>.
                  <br />
                  Para casos com comprovante, incluir na etapa: <strong>"cancelamento sem negociação"</strong>.
                </p>
                
                <div className="rounded-xl overflow-hidden border border-orange-200 shadow-sm bg-white max-w-[70%] mx-auto">
                  <img 
                    src="https://file.notion.so/f/f/91095438-d342-4604-9c58-001ea96f0455/91d8ddab-0616-4584-befd-194118ad9d6f/criarticket.gif?table=block&id=c141a257-12c3-4aba-9b2d-90956fb590d1&spaceId=91095438-d342-4604-9c58-001ea96f0455&expirationTimestamp=1772762400000&signature=c2fYw5m_TBmM6ah4QKi9vR17Nu65ysR5oe3t6eKbuhY" 
                    alt="Como criar ticket no HubSpot" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-4 pt-4 border-t border-orange-200/50">
                  <p className="text-xs text-orange-600">
                    <strong>Dica:</strong> Também pode ser aberto via <em>Visão Geral {'>'} Tickets {'>'} Adicionar</em> (Pipeline: Retenção CX | EV + PR).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Process: Inadimplência com uso de endereço */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Inadimplência com uso de endereço</h3>
                <p className="text-gray-500 mt-1">
                  Quando um cliente inadimplente solicita o cancelamento mas ainda utiliza nosso endereço.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <p className="text-sm text-red-800 font-medium mb-4">
                  ⚠️ Estes clientes serão suspensos por inadimplência, seguindo o fluxo normal.
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Antes de insistir na cobrança, é importante tentar entender:
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 h-fit">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Entendimento</h4>
                      <p className="text-sm text-gray-600">O que levou o cliente a contratar conosco na época?</p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg shrink-0 h-fit">
                      <Target size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Objetivo Principal</h4>
                      <p className="text-sm text-gray-600">Reduzir ao máximo o atrito com o cliente.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <div className="p-2 bg-gray-50 text-gray-600 rounded-lg shrink-0 h-fit">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Processo</h4>
                      <p className="text-sm text-gray-600">O processo segue o padrão: <strong>Suspensão na Iugu e na Wagtail.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Process: Migração de Plano */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
                <ArrowRightLeft size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Migração de plano de anual para mensal</h3>
                <p className="text-gray-500 mt-1">
                  Alternativa para clientes com dificuldades financeiras ou em processo de baixa/alteração.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Caso o cliente solicite o cancelamento do plano anual alegando dificuldades financeiras ou início de baixa/alteração de endereço, <strong className="text-purple-700">podemos ofertar a alteração para o plano mensal</strong>.
                </p>
                
                <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm mb-5">
                  <h4 className="font-bold text-purple-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Como realizar a operação na Intra:
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 ml-1">
                    <li>Busque o cliente na <strong>Intra</strong>.</li>
                    <li>Identifique o contrato na aba <strong>"Contratos"</strong>.</li>
                    <li>Clique em <strong>"Visão Admin"</strong>.</li>
                    <li>Realize a alteração do plano.</li>
                  </ol>
                </div>

                <a 
                  href="https://www.notion.so/POP-Hero-Altera-o-de-plano-e-de-endere-o-0cd6e206870f4864adf945efe7f64301?pvs=21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-800 hover:underline transition-colors"
                >
                  <FileText size={16} />
                  POP Hero | Alteração de plano e de endereço
                </a>
              </div>
            </div>
          </div>

          {/* Specific Process: Abertura de Ticket via E-mail */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Abertura de ticket via E-mail (HubSpot)</h3>
                <p className="text-gray-500 mt-1">
                  Para clientes vindos do "ajudafinanceiro@companyhero" necessitando de negociação.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600">
                Clientes que entram em contato através da caixa de entrada e necessitam de negociação em planos ativos. <strong>Siga os passos abaixo:</strong>
              </p>
              
              <div className="rounded-xl overflow-hidden border border-indigo-100 shadow-sm bg-white max-w-[70%] mx-auto">
                <img 
                  src="https://file.notion.so/f/f/91095438-d342-4604-9c58-001ea96f0455/1cac776b-997a-4dd9-8887-ef84dcab4a17/criarticket.gif?table=block&id=013b3ad7-75cf-4f85-823c-4ebe42115498&spaceId=91095438-d342-4604-9c58-001ea96f0455&expirationTimestamp=1772762400000&signature=j4vqYIKEc5m2IjStdshPvGFCSmZPq8FLFBvAm7fjEpA" 
                  alt="Como criar ticket via e-mail no HubSpot" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Specific Process: Formulário de Cancelamento */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl shrink-0">
                <ClipboardList size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Formulário de Cancelamento</h3>
                <p className="text-gray-500 mt-1">
                  Link direto para abertura de ticket de cancelamento.
                </p>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <p className="text-gray-700 mb-4">
                Utilize o formulário abaixo para registrar a solicitação. Ao preenchê-lo, um ticket será aberto <strong>automaticamente</strong> no sistema.
              </p>
              <a 
                href="https://bwsd8.share.hsforms.com/2iwv8vOWWQh6dyElkUfTW0Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm hover:shadow-md"
              >
                <ExternalLink size={18} />
                Acessar Formulário de Cancelamento
              </a>
            </div>
          </div>

          {/* Specific Process: Pipeline de Retenção */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Link da Pipeline de Retenção</h3>
                <p className="text-gray-500 mt-1">
                  Acesso e instruções de como localizar a pipeline correta no HubSpot.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-[70%] md:w-1/2 mx-auto md:mx-0 rounded-xl overflow-hidden border border-pink-200 shadow-sm bg-white">
                    <img 
                      src="https://file.notion.so/f/f/91095438-d342-4604-9c58-001ea96f0455/512b4b6e-670a-417c-be98-9fa2246d6515/pipelinedereteno.gif?table=block&id=fa0cfa23-d50c-4a1f-8fa8-56328331033f&spaceId=91095438-d342-4604-9c58-001ea96f0455&expirationTimestamp=1772762400000&signature=jqDPb3Kfu49hILWIKpPY1uxidt0Qol2x4W9q8TDUUDk" 
                      alt="Demonstrativo Pipeline Retenção" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      ⬅️ Esse GIF é um demonstrativo de como faz para acessar a pipeline. O link abaixo <strong>não te levará direto para ela</strong>, é necessário fazer o caminho selecionando a pipeline:
                    </p>
                    <div className="bg-white px-4 py-2 rounded-lg border border-pink-200 text-pink-700 font-bold text-center text-sm">
                      "Retenção CX | EV + PR"
                    </div>
                    <a 
                      href="https://app.hubspot.com/contacts/20005532/objects/0-5/views/all/board" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition-colors shadow-sm hover:shadow-md"
                    >
                      <ExternalLink size={18} />
                      Acessar Pipeline no HubSpot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Templates (Accordion) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gray-100 text-gray-600 rounded-2xl shrink-0">
                <Copy size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Modelos de E-mail</h3>
                <p className="text-gray-500 mt-1">
                  Templates prontos para copiar e usar em situações específicas.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {emailTemplates.map((template, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors bg-white">
                  <button
                    onClick={() => toggleEmailTemplate(index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${template.color}`}></div>
                      {template.title}
                    </h4>
                    {openEmailTemplate === index ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openEmailTemplate === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 bg-white border-t border-gray-100">
                          <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 font-mono whitespace-pre-wrap leading-relaxed border border-gray-100 mt-2 relative group">
                            {template.content}
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(template.content);
                              }}
                              className="absolute top-2 right-2 p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all opacity-0 group-hover:opacity-100"
                              title="Copiar texto"
                            >
                              <Copy size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
