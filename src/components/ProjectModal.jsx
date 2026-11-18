import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ExternalLink, Github, Play, Check, Plus, Trash2, 
  Search, Utensils, DollarSign, Calculator, ListTodo, UserCheck, CheckCircle2
} from 'lucide-react';

export const ProjectModal = ({ project, onClose, currentLang }) => {
  const [activeTab, setActiveTab] = useState('interactive');

  
  const [imcWeight, setImcWeight] = useState(65);
  const [imcHeight, setImcHeight] = useState(168);
  const [imcResult, setImcResult] = useState(null);

  
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finalizar arquitetura de componentes do portfólio', completed: true, priority: 'Alta' },
    { id: 2, text: 'Testar responsividade e acessibilidade no mobile', completed: true, priority: 'Média' },
    { id: 3, text: 'Preparar documentação de deploy na nuvem', completed: false, priority: 'Alta' },
    { id: 4, text: 'Revisar tradução em inglês (EN-US)', completed: false, priority: 'Baixa' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Média');
  const [taskFilter, setTaskFilter] = useState('all');

  
  const [students, setStudents] = useState([
    { id: '202601', name: 'Beatriz Almeida', course: 'Engenharia de Software', grade: 9.2, status: 'Ativo' },
    { id: '202602', name: 'Lucas Gabriel Costa', course: 'Ciência da Computação', grade: 8.7, status: 'Ativo' },
    { id: '202603', name: 'Mariana Duarte', course: 'Sistemas de Informação', grade: 9.5, status: 'Ativo' },
  ]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentCourse, setNewStudentCourse] = useState('Engenharia de Software');
  const [newStudentGrade, setNewStudentGrade] = useState('8.5');
  const [studentSearch, setStudentSearch] = useState('');

  
  const [menuItems] = useState([
    { id: 1, name: 'Risoto de Cogumelos Trufados', category: 'Pratos Principais', price: 68.0, desc: 'Arroz arbóreo, mix de cogumelos frescos e azeite trufado' },
    { id: 2, name: 'Salmão Grelhado com Aspargos', category: 'Pratos Principais', price: 74.0, desc: 'Filé nobre com molho de maracujá e legumes salteados' },
    { id: 3, name: 'Bruschetta de Parma & Brie', category: 'Entradas', price: 38.0, desc: 'Pão rústico artesanal, queijo brie maçaricado e presunto parma' },
    { id: 4, name: 'Petit Gâteau Gold & Sorvete', category: 'Sobremesas', price: 32.0, desc: 'Chocolate belga 70% com calda quente e sorvete artesanal' }
  ]);
  const [cart, setCart] = useState({ 1: 1, 3: 1 });
  const [orderSent, setOrderSent] = useState(false);

  
  const [transactions, setTransactions] = useState([
    { id: 1, desc: 'Renda Mensal / Bolsa', amount: 1800, type: 'income', date: 'Hoje', cat: 'Renda' },
    { id: 2, desc: 'Transporte Universitário', amount: 180, type: 'expense', date: 'Ontem', cat: 'Transporte' },
    { id: 3, desc: 'Livros de Engenharia de Software', amount: 220, type: 'expense', date: '04 Nov', cat: 'Educação' },
  ]);
  const [txDesc, setTxDesc] = useState('');
  const [txAmount, setTxAmount] = useState('');
  const [txType, setTxType] = useState('income');
  const [txCat, setTxCat] = useState('Geral');

  if (!project) return null;

  const isPt = currentLang === 'pt';

  
  const calculateIMC = () => {
    if (!imcWeight || !imcHeight) return;
    const hInMeters = imcHeight / 100;
    const val = Number((imcWeight / (hInMeters * hInMeters)).toFixed(1));
    let cls = 'Peso Normal';
    let st = 'normal';

    if (val < 18.5) {
      cls = isPt ? 'Abaixo do peso ideal' : 'Underweight';
      st = 'low';
    } else if (val < 25) {
      cls = isPt ? 'Peso saudável / normal' : 'Healthy weight';
      st = 'normal';
    } else if (val < 30) {
      cls = isPt ? 'Sobrepeso' : 'Overweight';
      st = 'over';
    } else {
      cls = isPt ? 'Obesidade' : 'Obesity';
      st = 'obese';
    }

    setImcResult({ bmi: val, classification: cls, status: st });
  };

  
  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false, priority: newTaskPriority }]);
    setNewTaskText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (taskFilter === 'pending') return !t.completed;
    if (taskFilter === 'completed') return t.completed;
    return true;
  });

 
  const addStudent = (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    setStudents([
      ...students,
      {
        id: `20240${students.length + 1}`,
        name: newStudentName,
        course: newStudentCourse,
        grade: parseFloat(newStudentGrade) || 8.0,
        status: 'Ativo'
      }
    ]);
    setNewStudentName('');
  };

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
    s.course.toLowerCase().includes(studentSearch.toLowerCase())
  );

 
  const updateCart = (id, delta) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find(m => m.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  
  const addTransaction = (e) => {
    e.preventDefault();
    const val = parseFloat(txAmount);
    if (!txDesc || isNaN(val) || val <= 0) return;
    setTransactions([
      { id: Date.now(), desc: txDesc, amount: val, type: txType, date: 'Agora', cat: txCat },
      ...transactions
    ]);
    setTxDesc('');
    setTxAmount('');
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const netBalance = totalIncome - totalExpense;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="relative bg-[#0d0d11] border border-[#27272a] hover:border-[#d4af37]/40 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col z-10"
        >
          
          <div className="px-6 py-4 border-b border-[#222228] flex items-center justify-between gap-4 bg-[#121216]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <span>{project.category}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">{project.year}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-[#1c1c22] border border-[#2e2e38] hover:border-[#d4af37]/50 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              <button
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-white hover:bg-[#202026] rounded-lg transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          
          <div className="px-6 py-2.5 bg-[#0e0e12] border-b border-[#222228] flex items-center justify-between gap-4">
            <div className="flex items-center gap-1 bg-[#16161b] p-1 rounded-lg border border-[#27272a]">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  activeTab === 'interactive'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isPt ? 'Demonstração Interativa' : 'Live Interactive Demo'}</span>
              </button>

              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                  activeTab === 'overview'
                    ? 'bg-[#d4af37] text-black font-semibold shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {isPt ? 'Visão Geral & Telas' : 'Screens & Architecture'}
              </button>
            </div>

            <span className="text-xs text-zinc-400 hidden sm:inline">
              {isPt ? 'Teste a aplicação em tempo real' : 'Test application in real-time'}
            </span>
          </div>

          
          <div className="p-6 overflow-y-auto space-y-6">
            {activeTab === 'interactive' ? (
              <div className="space-y-6">
                
                {project.id === 'calculadora-imc' && (
                  <div className="bg-[#131318] border border-[#27272a] rounded-xl p-5 sm:p-6 space-y-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Calculator className="w-4 h-4 text-[#d4af37]" />
                      <span>{isPt ? 'Calculadora Interativa de IMC (OMS)' : 'Interactive BMI Diagnostic'}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-zinc-300 mb-1.5">
                          {isPt ? 'Peso (kg):' : 'Weight (kg):'} <span className="text-[#facc15] font-bold">{imcWeight} kg</span>
                        </label>
                        <input
                          type="range"
                          min="40"
                          max="160"
                          value={imcWeight}
                          onChange={(e) => setImcWeight(Number(e.target.value))}
                          className="w-full accent-[#d4af37] cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-zinc-300 mb-1.5">
                          {isPt ? 'Altura (cm):' : 'Height (cm):'} <span className="text-[#facc15] font-bold">{imcHeight} cm</span>
                        </label>
                        <input
                          type="range"
                          min="130"
                          max="220"
                          value={imcHeight}
                          onChange={(e) => setImcHeight(Number(e.target.value))}
                          className="w-full accent-[#d4af37] cursor-pointer"
                        />
                      </div>
                    </div>

                    <button
                      onClick={calculateIMC}
                      className="w-full py-2.5 px-4 bg-[#d4af37] hover:bg-[#eab308] text-black font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isPt ? 'Calcular Diagnóstico Corporal' : 'Compute Body Diagnostic'}</span>
                    </button>

                    {imcResult && (
                      <div className="p-4 bg-[#1a1a22] border border-[#d4af37]/40 rounded-xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-400">{isPt ? 'Índice de Massa Corporal:' : 'Computed BMI:'}</span>
                          <span className="text-xl font-bold font-mono text-[#facc15]">{imcResult.bmi} kg/m²</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-zinc-400">{isPt ? 'Classificação Clínica:' : 'Clinical Status:'}</span>
                          <span className="font-semibold text-white">{imcResult.classification}</span>
                        </div>
                        <p className="text-xs text-zinc-400 pt-2 border-t border-[#2e2e38]">
                          {isPt 
                            ? `Para sua estatura de ${imcHeight} cm, a faixa de peso saudável estimada fica entre ${(18.5 * Math.pow(imcHeight/100, 2)).toFixed(1)} kg e ${(24.9 * Math.pow(imcHeight/100, 2)).toFixed(1)} kg.`
                            : `For your height of ${imcHeight} cm, estimated healthy weight is between ${(18.5 * Math.pow(imcHeight/100, 2)).toFixed(1)} kg and ${(24.9 * Math.pow(imcHeight/100, 2)).toFixed(1)} kg.`}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                
                {project.id === 'lista-de-tarefas' && (
                  <div className="bg-[#131318] border border-[#27272a] rounded-xl p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <ListTodo className="w-4 h-4 text-[#d4af37]" />
                        <span>{isPt ? 'Gerenciador de Tarefas & Produtividade' : 'Task & Sprint Manager'}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-[#1c1c22] p-1 rounded-lg text-xs">
                        <button
                          onClick={() => setTaskFilter('all')}
                          className={`px-2.5 py-1 rounded ${taskFilter === 'all' ? 'bg-[#d4af37] text-black font-semibold' : 'text-zinc-400'}`}
                        >
                          {isPt ? 'Todas' : 'All'}
                        </button>
                        <button
                          onClick={() => setTaskFilter('pending')}
                          className={`px-2.5 py-1 rounded ${taskFilter === 'pending' ? 'bg-[#d4af37] text-black font-semibold' : 'text-zinc-400'}`}
                        >
                          {isPt ? 'Pendentes' : 'Pending'}
                        </button>
                        <button
                          onClick={() => setTaskFilter('completed')}
                          className={`px-2.5 py-1 rounded ${taskFilter === 'completed' ? 'bg-[#d4af37] text-black font-semibold' : 'text-zinc-400'}`}
                        >
                          {isPt ? 'Concluídas' : 'Done'}
                        </button>
                      </div>
                    </div>

                    
                    <form onSubmit={addTask} className="flex gap-2">
                      <input
                        type="text"
                        placeholder={isPt ? 'Adicionar nova tarefa...' : 'Add new sprint task...'}
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        className="flex-1 bg-[#1a1a20] border border-[#27272a] rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                      />
                      <select
                        value={newTaskPriority}
                        onChange={(e) => setNewTaskPriority(e.target.value)}
                        className="bg-[#1a1a20] border border-[#27272a] text-zinc-300 text-xs rounded-lg px-2.5 py-2 focus:outline-none"
                      >
                        <option value="Alta">{isPt ? 'Alta' : 'High'}</option>
                        <option value="Média">{isPt ? 'Média' : 'Medium'}</option>
                        <option value="Baixa">{isPt ? 'Baixa' : 'Low'}</option>
                      </select>
                      <button
                        type="submit"
                        className="px-3.5 py-2 bg-[#d4af37] hover:bg-[#eab308] text-black font-semibold text-xs rounded-lg flex items-center gap-1 shrink-0"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isPt ? 'Inserir' : 'Add'}</span>
                      </button>
                    </form>

                    
                    <div className="space-y-2 max-h-56 overflow-y-auto">
                      {filteredTasks.map((t) => (
                        <div
                          key={t.id}
                          className="flex items-center justify-between p-3 bg-[#18181e] border border-[#27272a] rounded-lg text-xs hover:border-[#d4af37]/30 transition-all"
                        >
                          <div
                            onClick={() => toggleTask(t.id)}
                            className="flex items-center gap-3 cursor-pointer flex-1"
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${t.completed ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-zinc-500'}`}>
                              {t.completed && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className={t.completed ? 'line-through text-zinc-500' : 'text-zinc-200'}>
                              {t.text}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${t.priority === 'Alta' ? 'text-amber-300 bg-amber-950/40' : 'text-zinc-400 bg-zinc-800'}`}>
                              {t.priority}
                            </span>
                            <button
                              onClick={() => deleteTask(t.id)}
                              className="text-zinc-500 hover:text-red-400 p-1"
                              aria-label="Deletar tarefa"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                
                {project.id === 'cadastro-alunos' && (
                  <div className="bg-[#131318] border border-[#27272a] rounded-xl p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <UserCheck className="w-4 h-4 text-[#d4af37]" />
                        <span>{isPt ? 'Sistema de Matrícula & Controle Escolar' : 'Student Records Management'}</span>
                      </div>
                      <span className="text-xs text-[#d4af37] font-mono">
                        {students.length} {isPt ? 'Alunos Registrados' : 'Students'}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder={isPt ? 'Filtrar por nome ou curso...' : 'Search student or course...'}
                          value={studentSearch}
                          onChange={(e) => setStudentSearch(e.target.value)}
                          className="w-full bg-[#1a1a20] border border-[#27272a] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <form onSubmit={addStudent} className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 border-t border-[#222228]">
                      <input
                        type="text"
                        placeholder={isPt ? 'Nome do Aluno' : 'Student Name'}
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)}
                        className="bg-[#1a1a20] border border-[#27272a] rounded-lg px-3 py-1.5 text-xs text-white"
                        required
                      />
                      <input
                        type="text"
                        placeholder={isPt ? 'Curso' : 'Course'}
                        value={newStudentCourse}
                        onChange={(e) => setNewStudentCourse(e.target.value)}
                        className="bg-[#1a1a20] border border-[#27272a] rounded-lg px-3 py-1.5 text-xs text-white"
                        required
                      />
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        placeholder={isPt ? 'Nota Média (0-10)' : 'Grade (0-10)'}
                        value={newStudentGrade}
                        onChange={(e) => setNewStudentGrade(e.target.value)}
                        className="bg-[#1a1a20] border border-[#27272a] rounded-lg px-3 py-1.5 text-xs text-white"
                        required
                      />
                      <button
                        type="submit"
                        className="py-1.5 bg-[#d4af37] hover:bg-[#eab308] text-black font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isPt ? 'Matricular' : 'Enroll'}</span>
                      </button>
                    </form>

                    
                    <div className="border border-[#27272a] rounded-lg overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#1a1a22] text-zinc-400 font-mono">
                          <tr>
                            <th className="p-2.5">ID</th>
                            <th className="p-2.5">{isPt ? 'Discente' : 'Student'}</th>
                            <th className="p-2.5">{isPt ? 'Curso' : 'Course'}</th>
                            <th className="p-2.5">{isPt ? 'Média' : 'Grade'}</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#222228] text-zinc-300">
                          {filteredStudents.map((s) => (
                            <tr key={s.id} className="hover:bg-[#18181f]">
                              <td className="p-2.5 font-mono text-zinc-500">{s.id}</td>
                              <td className="p-2.5 font-medium text-white">{s.name}</td>
                              <td className="p-2.5">{s.course}</td>
                              <td className="p-2.5 font-mono text-[#facc15]">{s.grade}</td>
                              <td className="p-2.5">
                                <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                                  {s.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                
                {project.id === 'cardapio-restaurante' && (
                  <div className="bg-[#131318] border border-[#27272a] rounded-xl p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Utensils className="w-4 h-4 text-[#d4af37]" />
                        <span>{isPt ? 'Cardápio Digital & Bistrô Gourmet' : 'Gourmet Digital Dining Menu'}</span>
                      </div>
                      <span className="text-xs text-[#d4af37]">
                        {Object.keys(cart).length} {isPt ? 'itens no pedido' : 'items in order'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {menuItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 bg-[#18181e] border border-[#27272a] hover:border-[#d4af37]/40 rounded-lg flex flex-col justify-between gap-2"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-white">{item.name}</h4>
                              <span className="text-xs font-mono text-[#facc15]">R$ {item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{item.desc}</p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-[#222228]">
                            <span className="text-[10px] text-zinc-500 font-mono">{item.category}</span>
                            <div className="flex items-center gap-2">
                              {cart[item.id] ? (
                                <div className="flex items-center gap-1.5 bg-[#121216] px-2 py-0.5 rounded border border-[#27272a]">
                                  <button onClick={() => updateCart(item.id, -1)} className="text-zinc-400 hover:text-white px-1 font-bold">-</button>
                                  <span className="text-xs font-mono text-[#d4af37]">{cart[item.id]}</span>
                                  <button onClick={() => updateCart(item.id, 1)} className="text-zinc-400 hover:text-white px-1 font-bold">+</button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => updateCart(item.id, 1)}
                                  className="px-2.5 py-1 text-[11px] font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded transition-colors"
                                >
                                  {isPt ? 'Adicionar' : 'Add to Order'}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    
                    <div className="p-4 bg-[#171720] border border-[#2a2a34] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-zinc-400">{isPt ? 'Total com taxa de serviço (10%):' : 'Total with 10% gratuity:'}</div>
                        <div className="text-lg font-bold font-mono text-[#facc15]">R$ {(cartTotal * 1.1).toFixed(2)}</div>
                      </div>

                      {orderSent ? (
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{isPt ? 'Pedido simulado enviado à cozinha!' : 'Order dispatched to kitchen!'}</span>
                        </div>
                      ) : (
                        <button
                          disabled={cartTotal === 0}
                          onClick={() => setOrderSent(true)}
                          className="px-4 py-2 bg-[#d4af37] hover:bg-[#eab308] disabled:opacity-40 text-black text-xs font-semibold rounded-lg transition-colors"
                        >
                          {isPt ? 'Finalizar Pedido Digital' : 'Dispatch Order'}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                
                {project.id === 'finansmart' && (
                  <div className="bg-[#131318] border border-[#27272a] rounded-xl p-5 sm:p-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <DollarSign className="w-4 h-4 text-[#d4af37]" />
                        <span>{isPt ? 'FinanSmart — Centro de Inteligência Financeira' : 'FinanSmart Financial Intelligence'}</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-mono">
                        {isPt ? 'Status: Positivo' : 'Status: Healthy'}
                      </span>
                    </div>

                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-[#1a1a22] border border-[#27272a] rounded-lg">
                        <div className="text-[11px] text-zinc-400">{isPt ? 'Saldo Consolidado' : 'Net Balance'}</div>
                        <div className="text-lg font-bold font-mono text-[#facc15]">R$ {netBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                      </div>
                      <div className="p-3 bg-[#1a1a22] border border-[#27272a] rounded-lg">
                        <div className="text-[11px] text-emerald-400">{isPt ? 'Total de Entradas' : 'Total Revenues'}</div>
                        <div className="text-lg font-bold font-mono text-emerald-400">+ R$ {totalIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                      </div>
                      <div className="p-3 bg-[#1a1a22] border border-[#27272a] rounded-lg">
                        <div className="text-[11px] text-rose-400">{isPt ? 'Total de Saídas' : 'Total Expenses'}</div>
                        <div className="text-lg font-bold font-mono text-rose-400">- R$ {totalExpense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                      </div>
                    </div>

                    
                    <form onSubmit={addTransaction} className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 border-t border-[#222228]">
                      <input
                        type="text"
                        placeholder={isPt ? 'Descrição da Transação' : 'Transaction description'}
                        value={txDesc}
                        onChange={(e) => setTxDesc(e.target.value)}
                        className="sm:col-span-5 bg-[#1a1a20] border border-[#27272a] rounded-lg px-3 py-1.5 text-xs text-white"
                        required
                      />
                      <input
                        type="number"
                        placeholder="R$ 0,00"
                        value={txAmount}
                        onChange={(e) => setTxAmount(e.target.value)}
                        className="sm:col-span-3 bg-[#1a1a20] border border-[#27272a] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                      <select
                        value={txType}
                        onChange={(e) => setTxType(e.target.value)}
                        className="sm:col-span-2 bg-[#1a1a20] border border-[#27272a] rounded-lg px-2 text-xs text-zinc-300"
                      >
                        <option value="income">{isPt ? 'Receita (+)' : 'Income (+)'}</option>
                        <option value="expense">{isPt ? 'Despesa (-)' : 'Expense (-)'}</option>
                      </select>
                      <button
                        type="submit"
                        className="sm:col-span-2 py-1.5 bg-[#d4af37] hover:bg-[#eab308] text-black font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isPt ? 'Lançar' : 'Log'}</span>
                      </button>
                    </form>

                    
                    <div className="space-y-1.5 max-h-48 overflow-y-auto">
                      {transactions.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex items-center justify-between p-2.5 bg-[#18181f] border border-[#25252e] rounded-lg text-xs"
                        >
                          <div>
                            <span className="font-medium text-white">{tx.desc}</span>
                            <span className="text-[10px] text-zinc-500 ml-2 font-mono">{tx.date}</span>
                          </div>
                          <span className={`font-mono font-semibold ${tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {tx.type === 'income' ? '+' : '-'} R$ {tx.amount.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              
              <div className="space-y-6">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#27272a] bg-[#121216] relative group">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs text-zinc-300 font-mono">
                      {isPt ? 'Interface renderizada em alta resolução' : 'High-resolution interface view'}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{isPt ? 'Sobre a Aplicação' : 'About the Application'}</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.description[currentLang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{isPt ? 'Destaques e Funcionalidades' : 'Key Highlights'}</h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.highlights[currentLang].map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{isPt ? 'Stack Tecnológica' : 'Technologies Used'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-[#facc15] bg-[#1a1a22] border border-[#2e2e38] px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          
          <div className="p-4 px-6 border-t border-[#222228] bg-[#101014] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-zinc-500">
              {isPt ? 'Código disponível para consulta pública no GitHub' : 'Public repository available on GitHub'}
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#eab308] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{isPt ? 'Acessar Repositório no GitHub' : 'View on GitHub'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
