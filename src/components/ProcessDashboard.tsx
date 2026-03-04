import { motion } from 'motion/react';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Users, 
  HelpCircle, 
  ArrowRightLeft, 
  Wallet, 
  MessageSquare,
  ShieldCheck,
  Target,
  Calendar
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProcessDashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 sm:p-6 md:p-8 lg:p-12 font-sans text-[#0A0A0A]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-8 md:mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#FF005C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Playbook
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Alinhamento <span className="text-[#FF005C]">CX</span> e Financeiro
        </h1>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {/* Card 1: Validação (Priority) */}
        <motion.div variants={item} className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Validação antes de direcionar a solicitação</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg border-b border-gray-100 pb-6">
              <span className="text-[#FF005C] font-bold">⚠️ Importante:</span> Sempre validar se o cliente já está com <strong>fatura paga</strong> antes de qualquer ação.
            </p>

            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Confirmar qual time acionar:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Scenario A */}
              <div className="bg-blue-50/50 rounded-2xl p-5 md:p-6 border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Anuais</h4>
                    <p className="text-sm text-blue-700 leading-tight mt-1">
                      Dentro do mês vigente ou com vencimento futuro
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 pl-0 md:pl-12">
                  <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-blue-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">DS</div>
                    <span className="text-sm font-medium text-gray-700 truncate">@Daniel da Silva Melo</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-blue-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">NL</div>
                    <span className="text-sm font-medium text-gray-700 truncate">@Naye Luara Santos da Costa</span>
                  </div>
                </div>
              </div>

              {/* Scenario B */}
              <div className="bg-purple-50/50 rounded-2xl p-5 md:p-6 border border-purple-100 hover:bg-purple-50 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">Anuais de meses anteriores & Mensais</h4>
                    <p className="text-sm text-purple-700 leading-tight mt-1">
                      Referentes a meses anteriores ou qualquer plano mensal
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 pl-0 md:pl-12">
                  <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-purple-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0">DV</div>
                    <span className="text-sm font-medium text-gray-700 truncate">@Dyana Vieira</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-purple-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600 shrink-0">MM</div>
                    <span className="text-sm font-medium text-gray-700 truncate">@Michael Moreira Santos Moreira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Fluxo de Direcionamento */}
        <motion.div variants={item} className="bg-[#0A0A0A] text-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF005C] opacity-10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl">
                <HelpCircle size={24} className="text-[#FF005C]" />
              </div>
              <h2 className="text-xl md:text-xl font-bold">Fluxo para direcionamento</h2>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              É necessário entender previamente qual tipo de negociação ele deseja.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Deseja alterar a data de vencimento?",
                "Está solicitando desconto no valor?",
                "Quer parcelamento da fatura?",
                "Solicita retirada do reajuste?",
                "Outro tipo de ajuste? (especificar)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF005C] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative z-10 bg-white/10 rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-[#FF005C] mb-2">
              <Target size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Objetivo</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Ter informações completas antes do contato, garantindo direcionamento correto e uma abordagem mais assertiva.
            </p>
          </div>
        </motion.div>

        {/* Card 3: SLAs */}
        <motion.div variants={item} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
              <Clock size={24} />
            </div>
            <h2 className="text-xl md:text-xl font-bold">Prazos e SLAs</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Cancelamento
              </h3>
              <div className="space-y-2 pl-4 border-l-2 border-orange-100">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">Retorno imediato</span>
                  <span className="text-xs font-bold bg-orange-50 text-orange-700 px-2 py-1 rounded">Sem SLA</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-600">No dia do fechamento</span>
                  <span className="text-xs font-bold bg-orange-50 text-orange-700 px-2 py-1 rounded">72h úteis</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Inadimplência e Renovação
              </h3>
              <div className="space-y-3 pl-4 border-l-2 border-blue-100">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Para tratativas</div>
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">SLA de 24h úteis</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Disparos pontuais (Slack)</div>
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">SLA de 48h úteis</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Migração */}
        <motion.div variants={item} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
              <ArrowRightLeft size={24} />
            </div>
            <h2 className="text-xl md:text-xl font-bold">Migração de plano</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-green-50 border border-green-100 transition-colors hover:bg-green-100">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-green-600" />
                <span className="font-bold text-green-900">Cliente Adimplente</span>
              </div>
              <p className="text-sm text-green-800 pl-6">
                <span className="font-bold">CX</span> conduz o processo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-100 transition-colors hover:bg-red-100">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle size={16} className="text-red-600" />
                <span className="font-bold text-red-900">Cliente com Dívidas</span>
              </div>
              <p className="text-sm text-red-800 pl-6">
                <span className="font-bold">Financeiro</span> conduz o processo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Reembolso */}
        <motion.div variants={item} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
              <Wallet size={24} />
            </div>
            <h2 className="text-xl md:text-xl font-bold">Reembolso</h2>
          </div>

          <div className="relative pl-4 border-l-2 border-emerald-100 space-y-6">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-200" />
              <h4 className="font-bold text-sm text-gray-900 mb-1">1. Cobrança Duplicada</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                CX deve sugerir ao cliente considerar o crédito para o próximo mês.
              </p>
              <div className="mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 p-2 rounded">
                Se aceitar: Mudar a data da próxima cobrança.
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-500" />
              <h4 className="font-bold text-sm text-gray-900 mb-1">2. Se não aceitar</h4>
              <p className="text-sm text-gray-600 mb-3">
                Seguir com o reembolso.
              </p>
              <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded border border-yellow-100 flex gap-2 items-start">
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                <span>
                  <strong>Imprescindível:</strong> Inserir informação na planilha geral de reembolsos para acompanhamento.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
