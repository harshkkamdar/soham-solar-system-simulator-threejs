import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from "@nextui-org/react";
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';

interface ProjectSection {
  title: string;
  content: string;
}

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  title: string;
  longDescription: string;
  tech: string[];
  images?: ProjectImage[];
  sections?: ProjectSection[];
}

interface EnhancedProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const EnhancedProjectModal = ({ isOpen, onClose, project }: EnhancedProjectModalProps) => {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  const shouldShowSideBySide = project.images && project.images.length === 2;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        base: theme === 'dark' ? 'dark-theme' : 'light-theme',
        body: "custom-scrollbar"
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-xl font-bold">
              {project.title}
            </ModalHeader>
            <ModalBody className="custom-scrollbar">
              {project.images && project.images.length > 0 && (
                <div className="relative mb-6">
                  {shouldShowSideBySide ? (
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <Image
                            src={image.url}
                            alt={image.caption}
                            className="w-full rounded-lg transform"
                          />
                          <p className="text-center mt-2 text-sm text-gray-500">
                            {image.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <Image
                        src={project.images[currentImageIndex].url}
                        alt={project.images[currentImageIndex].caption}
                        className="w-full rounded-lg transform"
                      />
                      <p className="text-center mt-2 text-sm text-gray-500">
                        {project.images[currentImageIndex].caption}
                      </p>
                      {project.images.length > 1 && (
                        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
                          <Button
                            isIconOnly
                            variant="ghost"
                            onClick={prevImage}
                            className="bg-black/30 hover:bg-black/50"
                          >
                            ←
                          </Button>
                          <Button
                            isIconOnly
                            variant="ghost"
                            onClick={nextImage}
                            className="bg-black/30 hover:bg-black/50"
                          >
                            →
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
              
              <div className="space-y-6">
                {project.sections?.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="warning" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EnhancedProjectModal;
