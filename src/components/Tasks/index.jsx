export const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex justify-between">
        <div className="">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold text-[#35383E]">
            Minhas Tarefas
          </h2>
        </div>

        <div className="flex items-end gap-3">
          <button>Limpar tarefas</button>
          <button>Nova tarefa</button>
        </div>
      </div>
    </div>
  );
};
