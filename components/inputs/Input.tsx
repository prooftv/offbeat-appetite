import React, { memo } from 'react';

type InputProps = {
  name: string;
  placeholder: string;
  onInvalid: (event: React.FormEvent<HTMLInputElement>) => void;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  'aria-label'?: string;
  required?: boolean;
};

type InputBaseProps = InputProps & {
  type: string;
  pattern?: string;
};

const InputBase: React.FC<InputBaseProps> = ({ className, ...props }) => (
  <input
    {...props}
    type="text"
    className={[
      'flex items-center h-10 px-4 xl:h-12 xl:px-6',
      'type-body placeholder-gray-medium',
      'border rounded outline-none',
      'hover:shadow-inner-currentcolor',
      'focus:shadow-inner-currentcolor',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  />
);

const TextInputBase: React.FC<InputProps> = (props) => <InputBase {...props} type="text" />;

const EmailInputBase: React.FC<InputProps> = (props) => (
  <InputBase
    {...props}
    type="email"
    pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
  />
);

const inputClassesOlive = [
  'bg-olive-lighter border-olive-dark text-olive-darker',
  'focus:bg-olive-light focus:border-olive-darker',
];

export const TextInputOlive: React.FC<InputProps> = memo(({ className, ...props }) => (
  <TextInputBase
    {...props}
    className={[...inputClassesOlive, className].filter(Boolean).join(' ')}
  />
));
TextInputOlive.displayName = 'memo(TextInputOlive)';

export const EmailInputOlive: React.FC<InputProps> = memo(({ className, ...props }) => (
  <EmailInputBase
    {...props}
    className={[...inputClassesOlive, className].filter(Boolean).join(' ')}
  />
));
EmailInputOlive.displayName = 'memo(EmailInputOlive)';

const inputClassesPink = [
  'bg-pink-lighter border-pink-dark text-pink-darker',
  'focus:bg-pink-light focus:border-pink-darker',
];

export const TextInputPink: React.FC<InputProps> = memo(({ className, ...props }) => (
  <TextInputBase
    {...props}
    className={[...inputClassesPink, className].filter(Boolean).join(' ')}
  />
));
TextInputPink.displayName = 'memo(TextInputPink)';

export const EmailInputPink: React.FC<InputProps> = memo(({ className, ...props }) => (
  <EmailInputBase
    {...props}
    className={[...inputClassesPink, className].filter(Boolean).join(' ')}
  />
));
EmailInputPink.displayName = 'memo(EmailInputPink)';
