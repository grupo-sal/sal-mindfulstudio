import photo01 from './estudio-01-1080.webp.asset.json';
import small01 from './estudio-01-640.webp.asset.json';
import photo02 from './estudio-02-1080.webp.asset.json';
import small02 from './estudio-02-640.webp.asset.json';
import photo03 from './estudio-03-1080.webp.asset.json';
import small03 from './estudio-03-640.webp.asset.json';
import photo04 from './estudio-04-1080.webp.asset.json';
import small04 from './estudio-04-640.webp.asset.json';
import photo05 from './estudio-05-1080.webp.asset.json';
import small05 from './estudio-05-640.webp.asset.json';
import photo06 from './estudio-06-1080.webp.asset.json';
import small06 from './estudio-06-640.webp.asset.json';
import photo07 from './estudio-07-1080.webp.asset.json';
import small07 from './estudio-07-640.webp.asset.json';
import photo08 from './estudio-08-1080.webp.asset.json';
import small08 from './estudio-08-640.webp.asset.json';
import photo09 from './estudio-09-1080.webp.asset.json';
import small09 from './estudio-09-640.webp.asset.json';

function photo(large: { url: string }, small: { url: string }, legenda: string, alt: string) {
  return { src: large.url, srcSet: `${small.url} 640w, ${large.url} 1080w`, legenda, alt };
}

export const galeria = [
  photo(photo01, small01, 'a sala de grupo', 'Sala de Aulas de Grupo com tapetes e equipamento do SAL — Mindful Studio'),
  photo(photo08, small08, 'sala de pilates 1:1', 'Sala de Pilates com aparelhos de parede e tapetes no SAL — Mindful Studio'),
  photo(photo02, small02, 'a entrada', 'Entrada envidraçada com planta e tapete geométrico'),
  photo(photo03, small03, 'um canto do SAL', 'Tapete geométrico junto ao espelho arqueado e à parede verde'),
  photo(photo04, small04, 'prontos para a aula', 'Tapetes de Pilates com bolas, aros e blocos de cortiça'),
  photo(photo05, small05, 'os detalhes do movimento', 'Vista de cima dos tapetes e acessórios de Pilates'),
  photo(photo06, small06, 'luz e movimento', 'Sala de Aulas de Grupo com espelho e iluminação de teto'),
  photo(photo07, small07, 'pilates de aparelhos', 'Pormenor dos aparelhos de parede e acessórios de Pilates'),
  photo(photo09, small09, 'espaço para cuidar de ti', 'Vista ampla da sala de Pilates de aparelhos'),
];