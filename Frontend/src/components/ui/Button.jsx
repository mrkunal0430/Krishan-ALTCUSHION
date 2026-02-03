import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionButton = motion.button;
const MotionLink = motion.create(Link);
const MotionA = motion.a;

const Button = ({ 
  children, 
  variant = 'primary', // 'primary', 'secondary', 'glass', 'text'
  to, 
  href, 
  onClick, 
  className = "",
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  disabled,
  ...rest
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-primary-500 text-navy-950 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20",
    secondary: "border border-primary-500 text-primary-500 hover:bg-primary-500/10",
    glass: "glass-panel text-white hover:bg-white/10 border-white/10",
    text: "text-primary-500 hover:text-primary-400 underline-offset-4 hover:underline p-0 bg-transparent"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const classes = `${baseClasses} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${disabledClasses} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2" size={size === 'lg' ? 24 : 18} />}
    </>
  );

  const tapAnimation = disabled ? {} : { scale: 0.98 };

  if (to) {
    return (
      <MotionLink to={to} className={classes} whileTap={tapAnimation} {...rest}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <MotionA href={href} className={classes} whileTap={tapAnimation} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </MotionA>
    );
  }

  return (
    <MotionButton onClick={onClick} className={classes} whileTap={tapAnimation} disabled={disabled} {...rest}>
      {content}
    </MotionButton>
  );
};

export default Button;
