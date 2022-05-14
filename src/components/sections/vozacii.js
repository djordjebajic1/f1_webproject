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
                  Max Verstappen
                  </h3>
                <p className="m-0">
                Državljanstvo: Nizozemska<br/>
                Datum rođenja: 30.09.1997<br/>
                Startni broj: 1<br/>
                Tim: Red Bull Racing<br/>
                Broj osvojenih prvenstava: 1<br/>
               
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_mv.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Sergio Perez
                  </h3>
                <p className="m-0">
                Državljanstvo: Mexico<br/>
                Datum rođenja: 26.01.1990<br/>
                Startni broj: 11<br/>
                Tim: Red Bull Racing<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_cp.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                  Lewis Hamilton
                  </h3>
                <p className="m-0">
                Državljanstvo: Velika Britanija<br/>
                Datum rođenja: 07.01.1985<br/>
                Startni broj: 44<br/>
                Tim: Mercedes AMG Petronas<br/>
                Broj osvojenih prvenstava: 7<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_lh.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Gerge Russell
                  </h3>
                <p className="m-0">
                Državljanstvo: Velika Britanija<br/>
                Datum rođenja: 15.02.1998<br/>
                Startni broj: 63<br/>
                Tim: Mercedes AMG Petronas<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_gr.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Charles Leclerc
                  </h3>
                <p className="m-0">
                Državljanstvo: Monaco<br/>
                Datum rođenja: 16.10.1997<br/>
                Startni broj: 16<br/>
                Tim: Scuderia Ferrari<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_cl.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Carlos Sainz Jr.
                  </h3>
                <p className="m-0 mr-24">
                Državljanstvo: Španjolska<br/>
                Datum rođenja: 01.09.1994<br/>
                Startni broj: 55<br/>
                Tim: Scuderia Ferrari<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_cs.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Daniel Riccairdo
                  </h3>
                <p className="m-0">
                Državljanstvo: Australija<br/>
                Datum rođenja: 01.07.1989<br/>
                Startni broj: 3<br/>
                Tim: Mclaren F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_dr.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Lando Norris
                  </h3>
                <p className="m-0">
                Državljanstvo: Velika Britanija<br/>
                Datum rođenja: 13.11.1999<br/>
                Startni broj: 4<br/>
                Tim: Mclaren F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_ln.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Sebastian Vettel
                  </h3>
                <p className="m-0">
                Državljanstvo: Njemačka<br/>
                Datum rođenja: 03.07.1987<br/>
                Startni broj: 5<br/>
                Tim: Aston Martin F1 Team<br/>
                Broj osvojenih prvenstava: 4<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_sv.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Lance Stroll
                  </h3>
                <p className="m-0">
                Državljanstvo: Canada<br/>
                Datum rođenja: 29.10.1998<br/>
                Startni broj: 18<br/>
                Tim: Aston Martin F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_ls.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Fernando Alonso
                  </h3>
                <p className="m-0">
                Državljanstvo: Španjolska<br/>
                Datum rođenja: 29.07.1981<br/>
                Startni broj: 14<br/>
                Tim: Alpine F1 Team<br/>
                Broj osvojenih prvenstava: 2<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_fa.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Esteban Ocon
                  </h3>
                <p className="m-0">
                Državljanstvo: Francuska<br/>
                Datum rođenja: 17.09.1996<br/>
                Startni broj: 31<br/>
                Tim: Alpine F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_eo.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Pierre Gasly
                  </h3>
                <p className="m-0">
                Državljanstvo: Francuska<br/>
                Datum rođenja: 07.02.1996<br/>
                Startni broj: 10<br/>
                Tim: Scuderia AlphaTauri<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_pg.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Yuki Tsunoda
                  </h3>
                <p className="m-0">
                Državljanstvo: Japan<br/>
                Datum rođenja: 11.05.2000<br/>
                Startni broj: 22<br/>
                Tim: Scuderia AlphaTauri<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_yt.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Valtteri Bottas
                  </h3>
                <p className="m-0">
                Državljanstvo: Finska<br/>
                Datum rođenja: 28.08.1989<br/>
                Startni broj: 77<br/>
                Tim: Alfa Romeo F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_vb.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Thou Guanyu
                  </h3>
                <p className="m-0">
                Državljanstvo: Kina<br/>
                Datum rođenja: 30.05.1999<br/>
                Startni broj: 24<br/>
                Tim: Alfa Romeo F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_tg.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Kevim Magnussen
                  </h3>
                <p className="m-0">
                Državljanstvo: Danska<br/>
                Datum rođenja: 05.10.1992<br/>
                Startni broj: 20<br/>
                Tim: Hass F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_km.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Mick Schumacher
                  </h3>
                <p className="m-0">
                Državljanstvo: Njemačka<br/>
                Datum rođenja: 22.03.1999<br/>
                Startni broj: 47<br/>
                Tim: Hass F1 Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_ms.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Alexander Albon
                  </h3>
                <p className="m-0">
                Državljanstvo: Tailand<br/>
                Datum rođenja: 23.03.1996<br/>
                Startni broj: 23<br/>
                Tim: Williams Racing Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_aa.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
                <h3 className="mt-0 mb-12">
                Nicholas Latifi
                  </h3>
                <p className="m-0">
                Državljanstvo: Canada<br/>
                Datum rođenja: 29.06.1995<br/>
                Startni broj: 6<br/>
                Tim: Williams Racing Team<br/>
                Broj osvojenih prvenstava: 0<br/>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vozaci/img_nl.png')}
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