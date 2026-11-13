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
import photo08 from './estudio-08-1080.webp.asset.json';
import small08 from './estudio-08-640.webp.asset.json';
import photo09 from './estudio-09-zoom-1080.webp.asset.json';
import small09 from './estudio-09-zoom-640.webp.asset.json';
import fallback01 from './gallery-fallbacks/estudio-01.jpg';
import fallback02 from './gallery-fallbacks/estudio-02.jpg';
import fallback03 from './gallery-fallbacks/estudio-03.jpg';
import fallback04 from './gallery-fallbacks/estudio-04.jpg';
import fallback05 from './gallery-fallbacks/estudio-05.jpg';
import fallback06 from './gallery-fallbacks/estudio-06.jpg';
import fallback08 from './gallery-fallbacks/estudio-08.jpg';
import fallback09 from './gallery-fallbacks/estudio-09.jpg';

const fallbacks: Record<string, string> = {
  [photo01.url]: fallback01,
  [photo02.url]: fallback02,
  [photo03.url]: fallback03,
  [photo04.url]: fallback04,
  [photo05.url]: fallback05,
  [photo06.url]: fallback06,
  [photo08.url]: fallback08,
  [photo09.url]: fallback09,
};

function photo(large: { url: string }, small: { url: string }, legenda: string, alt: string) {
  const fallback = fallbacks[large.url];
  if (!fallback) throw new Error('Gallery photo requires a bundled fallback');
  return { src: large.url, srcSet: `${small.url} 640w, ${large.url} 1080w`, fallback, legenda, alt };
}

export const galeria = [
  photo(photo09, small09, 'espaço para cuidar de ti', 'Vista ampla da sala de Pilates de aparelhos'),
  photo(photo01, small01, 'a sala de grupo', 'Sala de Aulas de Grupo com tapetes e equipamento do SAL — Mindful Studio'),
  photo(photo08, small08, 'sala de pilates 1:1', 'Sala de Pilates com aparelhos de parede e tapetes no SAL — Mindful Studio'),
  photo(photo02, small02, 'a entrada', 'Entrada envidraçada com planta e tapete geométrico'),
  photo(photo03, small03, 'um canto do SAL', 'Tapete geométrico junto ao espelho arqueado e à parede verde'),
  photo(photo04, small04, 'prontos para a aula', 'Tapetes de Pilates com bolas, aros e blocos de cortiça'),
  photo(photo05, small05, 'os detalhes do movimento', 'Vista de cima dos tapetes e acessórios de Pilates'),
  photo(photo06, small06, 'luz e movimento', 'Sala de Aulas de Grupo com espelho e iluminação de teto'),
];