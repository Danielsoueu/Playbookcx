import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode';
import { 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Users, 
  HelpCircle, 
  ArrowRightLeft, 
  Wallet, 
  FileText,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

const nodeTypes = {
  custom: CustomNode,
};

// Initial Data Setup
const initialNodes = [
  // Root
  {
    id: 'root',
    type: 'custom',
    position: { x: 600, y: 0 },
    data: { 
      label: 'Alinhamento CX e Financeiro', 
      type: 'start',
      icon: Users,
      description: 'Selecione o cenário para visualizar o fluxo'
    },
  },

  // Branch 1: Cancelamento
  {
    id: 'cancel-1',
    type: 'custom',
    position: { x: 100, y: 150 },
    data: { 
      label: 'Cancelamento', 
      type: 'process',
      icon: AlertCircle,
    },
  },
  {
    id: 'cancel-2',
    type: 'custom',
    position: { x: 0, y: 300 },
    data: { 
      label: 'Retorno Imediato', 
      type: 'info',
      icon: Clock,
      description: 'Sem SLA definido'
    },
  },
  {
    id: 'cancel-3',
    type: 'custom',
    position: { x: 220, y: 300 },
    data: { 
      label: 'Dia do Fechamento', 
      type: 'info',
      icon: Clock,
      description: 'SLA: 72h úteis'
    },
  },

  // Branch 2: Inadimplência
  {
    id: 'inad-1',
    type: 'custom',
    position: { x: 450, y: 150 },
    data: { 
      label: 'Inadimplência e Renovação', 
      type: 'process',
      icon: AlertCircle,
    },
  },
  {
    id: 'inad-2',
    type: 'custom',
    position: { x: 350, y: 300 },
    data: { 
      label: 'Tratativas Padrão', 
      type: 'info',
      icon: Clock,
      description: 'SLA: 24h úteis'
    },
  },
  {
    id: 'inad-3',
    type: 'custom',
    position: { x: 550, y: 300 },
    data: { 
      label: 'Disparos Pontuais', 
      type: 'info',
      icon: MessageSquare,
      description: 'Aviso no Slack',
      subLabels: ['SLA: 48h úteis']
    },
  },

  // Branch 3: Validação (The Complex One)
  {
    id: 'val-1',
    type: 'custom',
    position: { x: 850, y: 150 },
    data: { 
      label: 'Acionar Cliente', 
      type: 'decision',
      icon: ShieldCheck,
      description: 'Validação prévia necessária'
    },
  },
  {
    id: 'val-check',
    type: 'custom',
    position: { x: 850, y: 300 },
    data: { 
      label: 'Fatura Paga?', 
      type: 'decision',
      icon: FileText,
      description: 'Validar antes de qualquer ação'
    },
  },
  {
    id: 'val-team',
    type: 'custom',
    position: { x: 850, y: 450 },
    data: { 
      label: 'Definir Time Responsável', 
      type: 'process',
      icon: Users,
    },
  },
  // Annual Branch
  {
    id: 'val-annual',
    type: 'custom',
    position: { x: 700, y: 600 },
    data: { 
      label: 'Planos Anuais', 
      type: 'process',
    },
  },
  {
    id: 'val-annual-current',
    type: 'custom',
    position: { x: 600, y: 750 },
    data: { 
      label: 'Mês Vigente / Futuro', 
      type: 'end',
      description: '@Daniel Melo & @Naye Costa'
    },
  },
  {
    id: 'val-annual-past',
    type: 'custom',
    position: { x: 800, y: 750 },
    data: { 
      label: 'Meses Anteriores', 
      type: 'end',
      description: '@Dyana Vieira & @Michael Moreira'
    },
  },
  // Monthly Branch
  {
    id: 'val-monthly',
    type: 'custom',
    position: { x: 1000, y: 600 },
    data: { 
      label: 'Planos Mensais', 
      type: 'end',
      description: 'Direcionar para @Dyana Vieira & @Michael Moreira'
    },
  },

  // Context Gathering (Connected to Acionar Cliente)
  {
    id: 'ctx-1',
    type: 'custom',
    position: { x: 1200, y: 300 },
    data: { 
      label: 'Coletar Contexto', 
      type: 'process',
      icon: HelpCircle,
      description: 'Antes de acionar o cliente',
      subLabels: [
        'Alterar vencimento?',
        'Desconto?',
        'Parcelamento?',
        'Retirar reajuste?'
      ]
    },
  },

  // Branch 4: Migração
  {
    id: 'mig-1',
    type: 'custom',
    position: { x: 1250, y: 150 },
    data: { 
      label: 'Migração de Plano', 
      type: 'process',
      icon: ArrowRightLeft,
    },
  },
  {
    id: 'mig-ok',
    type: 'custom',
    position: { x: 1150, y: 300 },
    data: { 
      label: 'Cliente Adimplente', 
      type: 'end',
      description: 'CX conduz o processo'
    },
  },
  {
    id: 'mig-debt',
    type: 'custom',
    position: { x: 1350, y: 300 },
    data: { 
      label: 'Cliente com Dívidas', 
      type: 'end',
      description: 'Financeiro conduz o processo'
    },
  },

  // Branch 5: Reembolso
  {
    id: 'refund-1',
    type: 'custom',
    position: { x: 1600, y: 150 },
    data: { 
      label: 'Reembolso', 
      type: 'process',
      icon: Wallet,
      description: 'Cobrança duplicada'
    },
  },
  {
    id: 'refund-sug',
    type: 'custom',
    position: { x: 1600, y: 300 },
    data: { 
      label: 'Sugerir Crédito', 
      type: 'decision',
      description: 'Para o próximo mês'
    },
  },
  {
    id: 'refund-yes',
    type: 'custom',
    position: { x: 1500, y: 450 },
    data: { 
      label: 'Aceitou', 
      type: 'end',
      icon: CheckCircle2,
      description: 'Mudar data da próxima cobrança'
    },
  },
  {
    id: 'refund-no',
    type: 'custom',
    position: { x: 1700, y: 450 },
    data: { 
      label: 'Não Aceitou', 
      type: 'end',
      icon: FileText,
      description: 'Reembolsar + Preencher Planilha'
    },
  },
];

const initialEdges: Edge[] = [
  // Root connections
  { id: 'e-root-cancel', source: 'root', target: 'cancel-1', type: 'smoothstep', animated: true },
  { id: 'e-root-inad', source: 'root', target: 'inad-1', type: 'smoothstep', animated: true },
  { id: 'e-root-val', source: 'root', target: 'val-1', type: 'smoothstep', animated: true, style: { strokeWidth: 3, stroke: '#FF005C' } },
  { id: 'e-root-mig', source: 'root', target: 'mig-1', type: 'smoothstep', animated: true },
  { id: 'e-root-refund', source: 'root', target: 'refund-1', type: 'smoothstep', animated: true },

  // Cancel connections
  { id: 'e-cancel-1', source: 'cancel-1', target: 'cancel-2', type: 'smoothstep' },
  { id: 'e-cancel-2', source: 'cancel-1', target: 'cancel-3', type: 'smoothstep' },

  // Inad connections
  { id: 'e-inad-1', source: 'inad-1', target: 'inad-2', type: 'smoothstep' },
  { id: 'e-inad-2', source: 'inad-1', target: 'inad-3', type: 'smoothstep' },

  // Validation connections
  { id: 'e-val-1', source: 'val-1', target: 'val-check', type: 'smoothstep' },
  { id: 'e-val-2', source: 'val-check', target: 'val-team', type: 'smoothstep', label: 'Se pago' },
  { id: 'e-val-3', source: 'val-team', target: 'val-annual', type: 'smoothstep' },
  { id: 'e-val-4', source: 'val-team', target: 'val-monthly', type: 'smoothstep' },
  { id: 'e-val-5', source: 'val-annual', target: 'val-annual-current', type: 'smoothstep' },
  { id: 'e-val-6', source: 'val-annual', target: 'val-annual-past', type: 'smoothstep' },
  
  // Context connection (dotted line from Validation)
  { id: 'e-val-ctx', source: 'val-1', target: 'ctx-1', type: 'smoothstep', animated: true, style: { strokeDasharray: '5,5' }, label: 'Contexto Necessário' },

  // Migration connections
  { id: 'e-mig-1', source: 'mig-1', target: 'mig-ok', type: 'smoothstep' },
  { id: 'e-mig-2', source: 'mig-1', target: 'mig-debt', type: 'smoothstep' },

  // Refund connections
  { id: 'e-ref-1', source: 'refund-1', target: 'refund-sug', type: 'smoothstep' },
  { id: 'e-ref-2', source: 'refund-sug', target: 'refund-yes', type: 'smoothstep' },
  { id: 'e-ref-3', source: 'refund-sug', target: 'refund-no', type: 'smoothstep' },
];

export default function Flowchart() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full bg-[#F8F9FA]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-dot-pattern"
        defaultEdgeOptions={{
          type: 'smoothstep',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#CBD5E1',
          },
        }}
      >
        <Controls />
        <MiniMap 
          nodeColor={(n) => {
            if (n.data.type === 'start') return '#FF005C';
            if (n.data.type === 'end') return '#0A0A0A';
            return '#E2E8F0';
          }} 
        />
        <Background color="#E2E8F0" gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
