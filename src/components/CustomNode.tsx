import { Handle, Position, NodeProps } from '@xyflow/react';
import { LucideIcon } from 'lucide-react';

export type CustomNodeData = {
  label: string;
  icon?: LucideIcon;
  description?: string;
  subLabels?: string[];
  type?: 'start' | 'process' | 'decision' | 'end' | 'info';
};

export default function CustomNode({ data }: NodeProps<any>) {
  const { label, icon: Icon, description, subLabels, type = 'process' } = data as CustomNodeData;

  const getColors = () => {
    switch (type) {
      case 'start':
        return 'bg-hero-pink text-white border-hero-pink';
      case 'decision':
        return 'bg-white border-hero-pink text-hero-dark border-2';
      case 'end':
        return 'bg-hero-dark text-white border-hero-dark';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-900 border';
      default:
        return 'bg-white border-gray-200 text-hero-dark border shadow-sm';
    }
  };

  return (
    <div className={`px-4 py-3 rounded-xl min-w-[200px] max-w-[300px] transition-all duration-200 hover:shadow-md ${getColors()}`}>
      <Handle type="target" position={Position.Top} className="!bg-gray-400 !w-2 !h-2" />
      
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`p-2 rounded-lg ${type === 'start' || type === 'end' ? 'bg-white/20' : 'bg-gray-100'} shrink-0`}>
            <Icon size={18} />
          </div>
        )}
        <div className="flex-1">
          <div className="font-bold text-sm">{label}</div>
          {description && (
            <div className={`text-xs mt-1 ${type === 'start' || type === 'end' ? 'text-white/90' : 'text-gray-500'}`}>
              {description}
            </div>
          )}
          {subLabels && subLabels.length > 0 && (
            <div className="mt-2 space-y-1">
              {subLabels.map((sub, idx) => (
                <div key={idx} className={`text-xs px-2 py-1 rounded ${type === 'start' ? 'bg-white/20' : 'bg-gray-100 text-gray-600'}`}>
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-gray-400 !w-2 !h-2" />
    </div>
  );
}
