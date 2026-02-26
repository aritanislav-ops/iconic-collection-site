:root{
  --max: 1180px;
  --text:#111;
  --muted:#666;
  --line:#e6e6e6;
}

.wrap{max-width:var(--max);margin:0 auto;padding:0 22px}
.contact{padding:32px 0 60px;color:var(--text)}
.contact__title{margin:0 0 18px;font-size:22px;font-weight:600}

.contact__info{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:28px;
  padding:14px 0 26px;
}

.info__k{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.info__v{font-size:13px}

.contact__grid{
  display:grid;
  grid-template-columns: 360px 1fr;
  gap:26px;
  align-items:start;
}

.form__lead{margin:0 0 14px;color:var(--muted);font-size:13px;line-height:1.5}

.field{display:block;margin:10px 0}
.field span{display:block;font-size:12px;color:var(--muted);margin:0 0 6px}
.field input,.field textarea{
  width:100%;
  padding:10px 12px;
  border:1px solid var(--line);
  outline:none;
  font:inherit;
}

.consent{display:flex;gap:10px;align-items:flex-start;margin:12px 0 14px;color:var(--muted);font-size:12px}
.consent input{margin-top:2px}

.btn{
  display:inline-block;
  width:100%;
  padding:11px 14px;
  background:#111;
  color:#fff;
  border:0;
  cursor:pointer;
  letter-spacing:.08em;
  text-transform:uppercase;
  font-size:12px;
}

.map{border:1px solid var(--line);height:420px}
.map iframe{width:100%;height:100%;border:0}

.contact__social{
  display:flex;
  justify-content:center;
  gap:14px;
  margin-top:26px;
  color:var(--muted);
}

/* responsive */
@media (max-width: 980px){
  .contact__info{grid-template-columns:repeat(2,1fr)}
  .contact__grid{grid-template-columns:1fr}
  .map{height:360px}
}
@media (max-width: 520px){
  .contact__info{grid-template-columns:1fr}
}
