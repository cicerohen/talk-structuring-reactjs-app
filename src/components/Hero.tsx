import * as types from '../types';

type Props = types.RCProps<{
  library?: string;
}>;

export const Hero = ({ library }: Props) => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop>
        <source src="./assets/video.mp4" type="video/mp4" />
        Your browser does not support the video element. Kindly update it to
        latest version.
      </video>
      <div className="hero-container">
        <header>
          <h5 className="hero-label">QAutomatizado</h5>
          <h2 className="hero-title">
            Organizando/Configurando Projetos {library}
          </h2>
          <h4 className="hero-label">Cicero Viana (@cicerohen )</h4>
        </header>
      </div>
    </section>
  );
};
