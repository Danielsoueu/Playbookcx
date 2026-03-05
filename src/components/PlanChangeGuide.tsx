import { motion } from 'motion/react';
import { ArrowLeft, Target, GitBranch, Compass, AlertTriangle, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanChangeGuide() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 md:p-12 font-sans text-[#0A0A0A]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Link to="/cancelamento" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF005C] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} />
          Voltar para o Guia de Cancelamento
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            POP Hero
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Alteração de <span className="text-purple-600">Plano e Endereço</span>
        </h1>

        <div className="space-y-8">
          {/* Objetivo */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Objetivo</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    Padronização do processo de alteração de plano e endereço dos clientes
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    Fazer processo nos lugares corretos
                  </li>
                  <li className="text-sm text-gray-400 italic mt-2">[Consulte a etapa abaixo para outros objetivos]</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Processos Relacionados */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
                <GitBranch size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Processos relacionados</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    Achar nomenclaturas padronizadas dos Cupons e Planos na Wagtail
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Procedimento */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold">Procedimento do POP</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-purple-100 pl-6 space-y-6">
                <h4 className="font-bold text-lg text-gray-900">Para ambas alterações utilizamos o mesmo processo</h4>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">1.</span> Pegar o <strong>ID do cliente</strong> no IUGU e colocar na busca na intranet;</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/f6f4c8d8-bb26-4961-ad00-964e8f4266f4/Untitled.png" 
                      alt="Busca na intranet" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">2.</span> Entrar cliente;</p>
                  </div>

                  {/* Step 3 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">3.</span> Ir em <strong>“Contratos”</strong> do lado esquerdo da intra</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/550e1963-640d-4738-837b-edc047671ce5/Untitled.png" 
                      alt="Menu Contratos" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Step 4 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">4.</span> Ir em <strong>“Serviços Ativos”,</strong> localizar o EV</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/7ffa8024-6ca1-4036-a81c-d3447ef9ee5d/Untitled.png" 
                      alt="Serviços Ativos" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Step 5 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">5.</span> Ir em <strong>“Visão Admin” {'>'} Trocar plano</strong></p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/a37af34a-a198-4db9-bf2f-e7fe39c76ecf/Untitled.png" 
                      alt="Visão Admin Trocar Plano" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Step 6 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">6.</span> Selecionar o novo endereço em <strong>“Smart”</strong> e em <strong>“Plano”</strong> a sazonalidade.</p>
                  </div>

                  {/* Warnings */}
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 space-y-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="text-orange-600 shrink-0" size={20} />
                      <div>
                        <p className="font-bold text-orange-800 mb-2">Sobre "Data de Vencimento":</p>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li><strong>Se venceu:</strong> Não colocar a data (o vencimento da assin. irá para o próximo dia)</li>
                          <li><strong>Se não venceu:</strong> Colocar a data do vencimento da assinatura seguindo a vigência original</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3">
                    <AlertTriangle className="text-orange-600 shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-orange-800 mb-1">Sobre "Adicionar Subitem":</p>
                      <p className="text-sm text-orange-700">
                        Devemos colocar o valor e o nome do cupom caso tenha na assinatura anterior.<br/>
                        ⚠️ Sempre colocar com a nomenclatura padrão do cupom, ex. <strong>“CP - **”</strong>
                      </p>
                    </div>
                  </div>

                  {/* Step 7 */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-purple-600 font-bold">7.</span> Clicar em <strong>Continuar</strong></p>
                  </div>
                </div>
              </div>

              {/* Special Case */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="text-blue-500" />
                  Exceção: Unidades sem opção no formulário
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Para unidades que <strong>NÃO tem</strong> a opção de escolher no formulário de alteração na intra:
                </p>
                <ul className="list-disc list-inside text-sm font-medium text-gray-700 mb-6 bg-white p-4 rounded-lg border border-gray-100">
                  <li>FARIA LIMA 1: <strong>Av. Brig. Faria Lima, 2369</strong></li>
                  <li>PAULISTA 1: <strong>Avenida Paulista, 171</strong></li>
                </ul>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">1.</span> Ir em <strong>Administração</strong> na intranet</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/7adc5967-d271-4472-ae3b-1483eb471b48/Untitled.png" 
                      alt="Administração Intranet" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">2.</span> Depois em <strong>Financeiro {'>'} Assinaturas</strong></p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">3.</span> Colocar em <strong>“Empresa”</strong> o ID do cliente</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">4.</span> Selecionamos o novo plano em <strong>“Plano”</strong></p>
                    <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded border border-yellow-100 flex gap-2 items-center">
                      <AlertTriangle size={14} />
                      <strong>Tomar cuidado para não selecionar o plano errado!</strong>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">5.</span> Jogar o código ou nome do cupom em <strong>“Coupom”</strong> caso tenha na assinatura anterior</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/13c85f2e-327c-439a-a1a9-a716fdd2f17d/Untitled.png" 
                      alt="Campo Cupom" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">6.</span> Preencher o vencimento (obrigatório)</p>
                    <p className="text-sm text-gray-500">Selecionar de acordo com os critérios padrão.</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">7.</span> Selecionar somente a opção de “enviar contrato”:</p>
                    <img 
                      src="https://prod-files-secure.s3.us-west-2.amazonaws.com/91095438-d342-4604-9c58-001ea96f0455/dcb8b342-975e-4e15-ab4c-1eb173aa9edb/Untitled.png" 
                      alt="Enviar contrato checkbox" 
                      className="rounded-xl border border-gray-200 shadow-sm max-w-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="font-medium text-gray-800"><span className="text-blue-500 font-bold">8.</span> Finalizar com <strong>“Criar assinatura”</strong></p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 mt-4">
                    <AlertTriangle className="text-red-600 shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-red-800 mb-1">Atenção:</p>
                      <p className="text-sm text-red-700">
                        Depois de finalizar a criação, lembre de <strong>suspender a assinatura anterior</strong>. Aqui essa ação deve ser feita manualmente dentro da IUGU.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info size={24} className="text-gray-400" />
              Informações adicionais
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://www.companyhero.com/admin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 group"
              >
                <span className="font-medium text-gray-700">Link da Intra</span>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-600" />
              </a>
              <a 
                href="https://smartstore.herosvc.com/cms/company/company/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 group"
              >
                <span className="font-medium text-gray-700">Link da Wagtail</span>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
