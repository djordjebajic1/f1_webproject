import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Sezona 2022/23',
    
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  RED BULL RACING
                  </h3>
                <p className="m-0">
                Sjedište:	Milton Keynes, UK<br/>
                Predsjednik:	Dietrich Mateschitz<br/>
                Šef momčadi:	Christian Horner<br/>
                Šef tehničkoga odjela:	Adrian Newey<br/>
                Šasija:	RB16B<br/>
                Pogonska jedinica:	Honda RA621H<br/>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/redbull.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Mercedes AMG Petronas
                  </h3>
                <p className="m-0">
                Sjedište:Brackley (šasija) i Brixworth (motor), UK<br/>
                Neizvršni predsjednik:	Markus Schäfer<br/>
                Šef momčadi i izvršni direktor:	Toto Wolff<br/>
                Šef tehničkoga odjela:	James Allison<br/>
                Šasija:		Mercedes-AMG F1 W12 E Performance<br/>
                Pogonska jedinica:		Mercedes-AMG F1 W12 E Performance<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/mer.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Scuderia Ferrari
                  </h3>
                <p className="m-0">
                Sjedište:Maranello, Italija<br/>
                Predsjednik:		John Elkann<br/>
                Šef momčadi i upravljački direktor:	Mattia Binotto<br/>
                Šef tehničkoga odjela:	Mattia Binotto<br/>
                Šasija:			SF21<br/>
                Pogonska jedinica:	Ferrari 065/6<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/fer.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Mclaren F1 Team
                  </h3>
                <p className="m-0">
                Sjedište:	Woking, UK<br/>
                Izvršni direktor:		Zak Brown<br/>
                Šef momčadi:	Andreas Seidl<br/>
                Trkaći direktor:	Andrea Stella<br/>
                Šasija:			MCL35M<br/>
                Pogonska jedinica:		Mercedes-AMG F1 M12 E Performance<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/mclaren.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Aston Martin F1 Team
                  </h3>
                <p className="m-0">
                Sjedište:	Northamptonshire, UK<br/>
                Šef momčadi i CEO:	Otmar Szafnauer<br/>
                Trkaći direktor:		Andrew Green<br/>
                Šasija:			AMR21<br/>
                Pogonska jedinica:		Mercedes-AMG F1 M12 E Performance<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/ast.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Alpine F1 Team
                  </h3>
                <p className="m-0">
                Sjedište:	Enstone, UK (šasija), Viry-Châtillon, Francuska (motor)<br/>
                Tehnički direktor:		Davide Brivio<br/>
                Izvršni direktor:		Zak Brown<br/>
                Šef momčadi:	Marcin Budkowski<br/>
                Šasija:				A521<br/>
                Pogonska jedinica:		Renault E-Tech 20B<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/alpine.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Scuderia AlphaTauri
                  </h3>
                <p className="m-0">
                Sjedište:	Faenza, Italija<br/>
                Šef tima:			Franz Tost<br/>
                Tehnički direktor:		Jody Egginton<br/>
                Šasija:				AT02<br/>
                Pogonska jedinica:		Honda RA621H<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/tauri.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Alfa Romeo F1 Team
                  </h3>
                <p className="m-0">
                Sjedište:		Hinwil, SUI<br/>
                Šef momčadi i CEO:	Frederic Vasseur<br/>
                Tehnički direktor:		Jan Monchaux<br/>
                Šasija:			C41<br/>
                Pogonska jedinica:			Ferrari 065/6<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/romeo.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Hass F1 Team
                  </h3>
                <p className="m-0">
                Sjedište:		Kannapolis, North Carolina, SAD<br/>
                Presjednik:	Gene Haas<br/>
                Šef momčadi: Guenther Steiner<br/>
                Tehnički direktor:	Simone Resta<br/>
                Šasija:		VF-22<br/>
                Pogonska jedinica:			Ferrari 065/6<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/hass.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Williams Racing Team
                  </h3>
                <p className="m-0">
                Sjedište:	Grove, UK<br/>
                Izvršni direktor: 	Jos Capito<br/>
                Šef momčadi:		Simon Roberts<br/>
                Tehnički direktor:		François-Xavier Demaison<br/>
                Šasija:		FW43B<br/>
                Pogonska jedinica:		Mercedes-AMG F1 M12 E Performance<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/timovi/williams.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;