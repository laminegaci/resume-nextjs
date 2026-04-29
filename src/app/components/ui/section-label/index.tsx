type SectionLabelProps = {
  number: string;
  title: string;
  eyebrow?: string;
};

const SectionLabel = ({ number, title, eyebrow }: SectionLabelProps) => {
  return (
    <div className="mb-10 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="mono text-xs text-primary">{number}</span>
        <span className="h-px w-10 bg-primary/40" />
        {eyebrow && (
          <span className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="display-tight">{title}</h2>
    </div>
  );
};

export default SectionLabel;
